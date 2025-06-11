import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // Here you would typically send the data to an email service or database
  console.log('Contact form submission:', data);
  return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
}