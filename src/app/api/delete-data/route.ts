import { promises as fs } from 'fs';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { deleteDataSchema } from '@/features/delete-data/schema';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validationResult = deleteDataSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please correct the highlighted fields and try again.',
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { phone, email, reason, app } = validationResult.data;

    const logEntry = [
      `timestamp=${new Date().toISOString()}`,
      `phone=${phone}`,
      `email=${email}`,
      `app=${app}`,
      `reason=${reason.replace(/\s+/g, ' ').trim()}`,
    ].join('\t');

    const logPath = join(process.cwd(), 'delete-data-requests.txt');
    await fs.appendFile(logPath, `${logEntry}\n`, { encoding: 'utf8' });

    return NextResponse.json(
      {
        success: true,
        message: 'Your deletion request has been received. We will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Delete data error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again.',
      },
      { status: 500 }
    );
  }
}
