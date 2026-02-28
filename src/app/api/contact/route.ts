import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/features/contact/schema';

/**
 * API route handler for contact form submissions
 * Validates and processes contact form data
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the incoming data against the schema
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    // In a real application, you would:
    // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 2. Store the message in a database
    // 3. Integrate with a CRM or helpdesk system

    // For now, we'll simulate a successful submission
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again.',
      },
      { status: 500 }
    );
  }
}
