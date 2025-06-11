import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { message } = await request.json();

  if (message.toLowerCase().includes('project')) {
    return NextResponse.json({ response: 'Navigating to Projects...', redirect: '/projects' });
  } else if (message.toLowerCase().includes('contact')) {
    return NextResponse.json({ response: 'Navigating to Contact...', redirect: '/contact' });
  } else {
    return NextResponse.json({ response: 'How can I assist you today?' });
  }
}