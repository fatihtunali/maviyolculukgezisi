'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import ItineraryBuilder, { QuoteData } from '@/components/itinerary/ItineraryBuilder';
import YachtQuoteView from '@/components/quotes/YachtQuoteView';

// Extended type to include yacht-specific fields from API
interface ExtendedQuoteData extends QuoteData {
  quote_type?: string;
  itinerary_data?: {
    type?: string;
    yacht?: {
      id: number;
      name: string;
      slug: string;
    };
    booking?: {
      guests: number;
      nights: number;
      currency: string;
      customer_country: string;
    };
    metadata?: {
      language: string;
      ip_address: string;
      source_url: string;
      submitted_at: string;
    };
  };
}

export default function EditQuotePage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const t = useTranslations('quoteDetailPage');
  const [quoteId, setQuoteId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [quoteData, setQuoteData] = useState<ExtendedQuoteData | null>(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      setQuoteId(resolvedParams.id);
    });
  }, [params]);

  useEffect(() => {
    if (quoteId) {
      fetchQuote();
    }
  }, [quoteId]);

  const fetchQuote = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      router.push('/login');
      return;
    }

    const parsedUser = JSON.parse(userData);

    try {
      const response = await fetch(
        `/api/quotes/${parsedUser.organizationId}/${quoteId}`,
        {
          headers: { 'Authorization': `Bearer ${token}` }
        }
      );

      if (response.ok) {
        const data = await response.json();
        setQuoteData(data.quote);
      } else {
        alert(t('alerts.loadFailed'));
        router.push('/dashboard/requests');
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      alert(t('alerts.loadFailed'));
      router.push('/dashboard/requests');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = (newStatus: string) => {
    if (quoteData) {
      setQuoteData({ ...quoteData, status: newStatus });
    }
  };

  const handleSave = async (updatedQuoteData: QuoteData) => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      router.push('/login');
      return;
    }

    const parsedUser = JSON.parse(userData);

    try {
      const response = await fetch(`/api/quotes/${parsedUser.organizationId}/${quoteId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          customer_name: updatedQuoteData.customer_name,
          customer_email: updatedQuoteData.customer_email,
          customer_phone: updatedQuoteData.customer_phone,
          destination: updatedQuoteData.destination,
          start_date: updatedQuoteData.start_date,
          end_date: updatedQuoteData.end_date,
          adults: updatedQuoteData.adults,
          children: updatedQuoteData.children,
          total_price: updatedQuoteData.total_price,
          itinerary: updatedQuoteData.itinerary,
          quote_preferences: updatedQuoteData.quote_preferences
        })
      });

      if (!response.ok) {
        alert(t('alerts.updateFailed'));
        return;
      }

      alert(t('alerts.updateSuccess'));
      fetchQuote();

    } catch (error) {
      console.error('Error updating quote:', error);
      alert(t('alerts.updateFailed'));
    }
  };

  const handleGenerateAINarrative = async () => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      router.push('/login');
      return;
    }

    const parsedUser = JSON.parse(userData);

    if (!confirm(t('confirms.generateNarratives'))) {
      return;
    }

    try {
      const response = await fetch(`/api/quotes/${parsedUser.organizationId}/${quoteId}/generate-itinerary`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        alert(t('alerts.narrativesSuccess'));
        fetchQuote();
      } else {
        const error = await response.json();
        alert(t('alerts.narrativesFailed', { error: error.error || t('alerts.unknownError') }));
      }
    } catch (error) {
      console.error('Error generating AI narratives:', error);
      alert(t('alerts.narrativesError'));
    }
  };

  const handleGenerateAI = async () => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      router.push('/login');
      return;
    }

    const parsedUser = JSON.parse(userData);

    if (!confirm(t('confirms.createItinerary'))) {
      return;
    }

    try {
      const response = await fetch(`/api/quotes/${parsedUser.organizationId}/${quoteId}/create-customer-itinerary`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const itineraryUrl = `${window.location.origin}${data.url}`;

        if (confirm(t('alerts.itineraryCreatedWithLink', { url: itineraryUrl }))) {
          window.open(data.url, '_blank');
        } else {
          navigator.clipboard.writeText(itineraryUrl);
          alert(t('alerts.linkCopied'));
        }
      } else {
        const error = await response.json();
        alert(t('alerts.itineraryFailed', { error: error.error || t('alerts.unknownError') }));
      }
    } catch (error) {
      console.error('Error creating customer itinerary:', error);
      alert(t('alerts.itineraryError'));
    }
  };

  const handleSend = async () => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      router.push('/login');
      return;
    }

    const parsedUser = JSON.parse(userData);

    if (!confirm(t('confirms.sendQuote'))) {
      return;
    }

    try {
      const response = await fetch(`/api/requests/${parsedUser.organizationId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          quoteId: quoteId,
          action: 'mark_sent'
        })
      });

      if (response.ok) {
        alert(t('alerts.sendSuccess'));
        router.push('/dashboard/requests');
      } else {
        alert(t('alerts.sendFailed'));
      }
    } catch (error) {
      console.error('Error sending quote:', error);
      alert(t('alerts.sendFailed'));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 mx-auto"></div>
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal-600 mx-auto absolute top-0 left-1/2 -translate-x-1/2"></div>
          </div>
          <p className="mt-6 text-gray-700 font-medium">{t('loading')}</p>
        </div>
      </div>
    );
  }

  if (!quoteData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('notFound')}</h2>
          <button
            onClick={() => router.push('/dashboard/requests')}
            className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-medium hover:from-teal-700 hover:to-cyan-700 transition-all duration-200"
          >
            {t('backToRequests')}
          </button>
        </div>
      </div>
    );
  }

  // Check if this is a yacht charter quote
  const isYachtQuote = quoteData.quote_type === 'yacht' ||
    quoteData.itinerary_data?.type === 'yacht_charter' ||
    (quoteData.destination && quoteData.destination.toLowerCase().includes('yacht'));

  if (isYachtQuote) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 p-6">
        <YachtQuoteView
          quoteData={quoteData as any}
          onStatusChange={handleStatusChange}
        />
      </div>
    );
  }

  return (
    <div>
      <ItineraryBuilder
        mode="edit"
        initialData={quoteData}
        onSave={handleSave}
        onSend={handleSend}
        onGenerateAI={handleGenerateAI}
        onGenerateAINarrative={handleGenerateAINarrative}
      />
    </div>
  );
}
