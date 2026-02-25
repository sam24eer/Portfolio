import { readFile } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const resumePath = path.join(process.cwd(), 'public', 'Sameer-Kadi-Resume.pdf');

  try {
    const pdf = await readFile(resumePath);

    return new NextResponse(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Sameer-Kadi-Resume.pdf"',
        // Always fetch latest resume after replacement in /public.
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate'
      }
    });
  } catch {
    return new NextResponse('Resume file not found.', { status: 404 });
  }
}

