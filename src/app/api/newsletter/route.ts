import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import type { ApiResponse, NewsletterSubscription } from "@/types/database";

// TravelQuoteBot API Configuration
const TQB_API_URL = process.env.TQB_API_URL || "http://134.209.137.11:3004";
const TQB_API_KEY = process.env.TQB_API_KEY || "myg_live_sk_7f8a9b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a";

// Save newsletter subscriber to TQB as a client
async function saveToTravelQuoteBot(email: string, ipAddress: string): Promise<void> {
  try {
    await fetch(`${TQB_API_URL}/api/external/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": TQB_API_KEY,
      },
      body: JSON.stringify({
        name: email.split("@")[0], // Use email prefix as name
        email: email,
        subject: "Newsletter Subscription",
        message: "Newsletter subscriber from website",
        source_url: "https://maviyolculukgezisi.com",
        ip_address: ipAddress,
        language: "tr",
      }),
    });
    console.log(`[TQB] Newsletter subscriber saved: ${email}`);
  } catch (error) {
    console.error("[TQB] Failed to save newsletter subscriber:", error);
  }
}

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse<NewsletterSubscription>>> {
  try {
    const body = await request.json();

    // Validate email
    if (!body.email || typeof body.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { success: false, error: "Geçerli bir e-posta adresi gereklidir" },
        { status: 400 }
      );
    }

    // Get metadata
    const ipAddress = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";

    // Create subscription in local DB
    const subscription = await db.createNewsletterSubscription({
      email: body.email.trim().toLowerCase(),
      language: body.language || "tr",
      isActive: true,
      ipAddress,
      source: body.source || "website",
    });

    // Also save to TQB as a client (non-blocking)
    saveToTravelQuoteBot(body.email.trim().toLowerCase(), ipAddress);

    return NextResponse.json(
      {
        success: true,
        data: subscription,
        message: "Bültenimize abone olduğunuz için teşekkür ederiz!",
      },
      { status: 201 }
    );
  } catch (error) {
    // Check for duplicate subscription
    if (error instanceof Error && error.message === "Email already subscribed") {
      return NextResponse.json(
        { success: false, error: "Bu e-posta adresi zaten bültenimize kayıtlı" },
        { status: 409 }
      );
    }

    console.error("[API] Newsletter subscription error:", error);
    return NextResponse.json(
      { success: false, error: "Abone olunamadı. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}

// Unsubscribe endpoint
export async function DELETE(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { success: false, error: "E-posta adresi gereklidir" },
        { status: 400 }
      );
    }

    const success = await db.unsubscribeNewsletter(email.toLowerCase());

    if (!success) {
      return NextResponse.json(
        { success: false, error: "E-posta adresi abonelik listemizde bulunamadı" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Bülten aboneliğiniz başarıyla iptal edildi",
    });
  } catch (error) {
    console.error("[API] Newsletter unsubscribe error:", error);
    return NextResponse.json(
      { success: false, error: "Abonelik iptal edilemedi. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
