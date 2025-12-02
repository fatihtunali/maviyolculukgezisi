'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Ship,
  User,
  Mail,
  Phone,
  Calendar,
  Users,
  MapPin,
  DollarSign,
  Clock,
  ArrowLeft,
  Send,
  CheckCircle,
  XCircle,
  Loader2,
  Globe,
  FileText
} from 'lucide-react';

interface YachtQuoteData {
  id: number;
  quote_number: string;
  quote_type: string;
  yacht_id: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  destination: string;
  start_date: string;
  end_date: string;
  adults: number;
  children: number;
  total_price: string;
  status: string;
  source: string;
  special_requests: string | null;
  created_at: string;
  itinerary_data: {
    type: string;
    yacht: {
      id: number;
      name: string;
      slug: string;
    };
    booking: {
      guests: number;
      nights: number;
      currency: string;
      customer_country: string;
    };
    metadata: {
      language: string;
      ip_address: string;
      source_url: string;
      submitted_at: string;
    };
  };
  organization_name: string;
  organization_email: string;
  organization_phone: string;
}

interface YachtQuoteViewProps {
  quoteData: YachtQuoteData;
  onStatusChange?: (newStatus: string) => void;
}

export default function YachtQuoteView({ quoteData, onStatusChange }: YachtQuoteViewProps) {
  const router = useRouter();
  const [updating, setUpdating] = useState(false);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatCurrency = (amount: string | number, currency: string = 'EUR') => {
    const num = typeof amount === 'string' ? parseFloat(amount) : amount;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(num);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return 'bg-gray-100 text-gray-700';
      case 'sent': return 'bg-blue-100 text-blue-700';
      case 'viewed': return 'bg-purple-100 text-purple-700';
      case 'accepted': return 'bg-green-100 text-green-700';
      case 'rejected': return 'bg-red-100 text-red-700';
      case 'expired': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const handleStatusUpdate = async (newStatus: string) => {
    setUpdating(true);
    try {
      const token = localStorage.getItem('token');
      const userData = localStorage.getItem('user');
      if (!token || !userData) return;

      const parsedUser = JSON.parse(userData);

      const response = await fetch(`/api/quotes/${parsedUser.organizationId}/${quoteData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok && onStatusChange) {
        onStatusChange(newStatus);
      }
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setUpdating(false);
    }
  };

  const yachtData = quoteData.itinerary_data?.yacht;
  const bookingData = quoteData.itinerary_data?.booking;
  const metadata = quoteData.itinerary_data?.metadata;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/quotes"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-gray-900">{quoteData.quote_number}</h1>
              <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(quoteData.status)}`}>
                {quoteData.status}
              </span>
            </div>
            <p className="text-gray-500">Yacht Charter Quote</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {quoteData.status === 'draft' && (
            <button
              onClick={() => handleStatusUpdate('sent')}
              disabled={updating}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 disabled:opacity-50"
            >
              {updating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              Mark as Sent
            </button>
          )}
          {(quoteData.status === 'sent' || quoteData.status === 'viewed') && (
            <>
              <button
                onClick={() => handleStatusUpdate('accepted')}
                disabled={updating}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 disabled:opacity-50"
              >
                <CheckCircle className="w-4 h-4" />
                Accept
              </button>
              <button
                onClick={() => handleStatusUpdate('rejected')}
                disabled={updating}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2 disabled:opacity-50"
              >
                <XCircle className="w-4 h-4" />
                Reject
              </button>
            </>
          )}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Customer Info */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-gray-500" />
            Customer Information
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <User className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium text-gray-900">{quoteData.customer_name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href={`mailto:${quoteData.customer_email}`} className="font-medium text-blue-600 hover:underline">
                  {quoteData.customer_email}
                </a>
              </div>
            </div>
            {quoteData.customer_phone && (
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href={`tel:${quoteData.customer_phone}`} className="font-medium text-blue-600 hover:underline">
                    {quoteData.customer_phone}
                  </a>
                </div>
              </div>
            )}
            {bookingData?.customer_country && (
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Country</p>
                  <p className="font-medium text-gray-900">{bookingData.customer_country}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Yacht Info */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Ship className="w-5 h-5 text-sky-500" />
            Yacht Details
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Ship className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Yacht</p>
                <p className="font-medium text-gray-900">{yachtData?.name || quoteData.destination}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Guests</p>
                <p className="font-medium text-gray-900">
                  {quoteData.adults} adults{quoteData.children > 0 ? `, ${quoteData.children} children` : ''}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Dates</p>
                <p className="font-medium text-gray-900">
                  {formatDate(quoteData.start_date)} → {formatDate(quoteData.end_date)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-medium text-gray-900">{bookingData?.nights || 7} nights</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-green-500" />
          Pricing
        </h2>
        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
          <div>
            <p className="text-sm text-gray-600">Total Charter Price</p>
            <p className="text-3xl font-bold text-green-600">
              {formatCurrency(quoteData.total_price, bookingData?.currency || 'EUR')}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Per Night</p>
            <p className="text-xl font-semibold text-gray-700">
              {formatCurrency(
                parseFloat(quoteData.total_price) / (bookingData?.nights || 7),
                bookingData?.currency || 'EUR'
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Special Requests */}
      {quoteData.special_requests && (
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-gray-500" />
            Special Requests
          </h2>
          <p className="text-gray-700 whitespace-pre-wrap">{quoteData.special_requests}</p>
        </div>
      )}

      {/* Metadata */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">Quote Details</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Created</p>
            <p className="text-gray-900">{formatDate(quoteData.created_at)}</p>
          </div>
          <div>
            <p className="text-gray-500">Source</p>
            <p className="text-gray-900">{metadata?.source_url || quoteData.source}</p>
          </div>
          <div>
            <p className="text-gray-500">Language</p>
            <p className="text-gray-900 uppercase">{metadata?.language || 'TR'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
