import Mailgun from 'mailgun.js'
import FormData from 'form-data'
import { NextRequest, NextResponse } from 'next/server'

const CONTACT_FORM_FROM_EMAIL = process.env.CONTACT_FORM_FROM_EMAIL as string
const CONTACT_FORM_TO_EMAIL = "info@mgw.football"
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN as string
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY as string

const mailgun = new Mailgun(FormData)
const mg = mailgun.client({
  username: 'api',
  key: MAILGUN_API_KEY,
  url: 'https://api.eu.mailgun.net',
})

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()

  const text = ['From: ' + name + ' <' + email + '>\n', message].join('\n')

  try {
    await mg.messages.create(MAILGUN_DOMAIN, {
      subject: 'New contact form submission from MGW',
      from: CONTACT_FORM_FROM_EMAIL,
      to: CONTACT_FORM_TO_EMAIL,
      text,
      'h:Reply-To': email,
    })

    return NextResponse.json({ status: 'ok' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
} 