import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, service, message } = body

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone number are required' },
        { status: 400 }
      )
    }

    // Format the inquiry message
    const inquiryMessage = `*New Inquiry from Website*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Service:* ${service || 'Not specified'}\n` +
      `*Message:* ${message || 'No message provided'}\n\n` +
      `_Received at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}_`

    // Log to console (for development/debugging)
    console.log('=== NEW INQUIRY ===')
    console.log(inquiryMessage)
    console.log('==================')

    // Return success with WhatsApp link
    const whatsappNumber = '918790260037'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(inquiryMessage)}`

    return NextResponse.json({
      success: true,
      whatsappLink,
      message: 'Inquiry submitted successfully'
    })
  } catch (error) {
    console.error('Error processing inquiry:', error)
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    )
  }
}

