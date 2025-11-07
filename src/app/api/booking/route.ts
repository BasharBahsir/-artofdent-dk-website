import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, treatment, preferredDate, preferredTime, message, clinic } = body

    // Create transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    })

    const clinicName = clinic === 'artofdent-malmo' ? 'Artofdent Malmö' : 'ABC Tandklinikgruppen Malmö'
    const clinicAddress = clinic === 'artofdent-malmo' 
      ? 'Hantverkaregatan 6D, 211 55 Malmö' 
      : 'Södra Förstadsgatan 31, 211 43 Malmö'

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ['basharbashir1st@gmail.com'],
      subject: `🇩🇰 DANSK PATIENT - Ny bokningsförfrågan - ${clinicName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #dc2626; color: white; padding: 15px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 18px;">🇩🇰 DANSK PATIENT - Från DK Webbsida</h2>
            <p style="margin: 5px 0 0 0; font-size: 14px;">Kom ihåg: Vi betalar patientens resa över Öresund!</p>
          </div>
          
          <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Ny bokningsförfrågan
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Patientinformation</h3>
            <p><strong>Namn:</strong> ${name}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            <p><strong>E-post:</strong> ${email}</p>
          </div>

          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Bokningsdetaljer</h3>
            <p><strong>Klinik:</strong> ${clinicName}</p>
            <p><strong>Adress:</strong> ${clinicAddress}</p>
            <p><strong>Behandling:</strong> ${treatment}</p>
            ${preferredDate ? `<p><strong>Önskat datum:</strong> ${preferredDate}</p>` : ''}
            ${preferredTime ? `<p><strong>Önskad tid:</strong> ${preferredTime}</p>` : ''}
          </div>

          ${message ? `
          <div style="background-color: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Meddelande från patient</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>Denna bokningsförfrågan skickades från ARTOFDENT<span style="font-size: 10px; vertical-align: super;">dk</span> webbsida.</p>
            <p>Kontakta patienten inom 24 timmar för att bekräfta bokningen.</p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Booking request sent successfully' })
  } catch (error) {
    console.error('Error sending booking email:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send booking request' },
      { status: 500 }
    )
  }
}
