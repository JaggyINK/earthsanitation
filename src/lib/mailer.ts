import { Resend } from 'resend'

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'earthsanitationbtp@gmail.com'

interface LeadData {
  name: string
  phone: string
  email?: string
  message: string
  type: string
  service?: string
  city?: string
  address?: string
  urgency?: string
  clientType?: string
  company?: string
}

const typeLabels: Record<string, string> = {
  QUOTE: 'Demande de devis',
  CONTACT: 'Contact',
  EMERGENCY: 'Urgence',
}

const urgencyLabels: Record<string, string> = {
  low: 'Pas urgent',
  medium: 'Sous quelques jours',
  high: 'Urgent (24-48h)',
  emergency: 'Urgence immédiate',
}

export async function sendLeadNotification(data: LeadData) {
  const typeLabel = typeLabels[data.type] || data.type
  const urgencyLabel = data.urgency ? (urgencyLabels[data.urgency] || data.urgency) : '—'
  const isUrgent = data.urgency === 'emergency' || data.urgency === 'high'

  const subject = `${isUrgent ? '🔴 ' : ''}${typeLabel} — ${data.name}${data.city ? ` (${data.city})` : ''}`

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1B4332; color: #F5F1EB; padding: 20px 24px; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 20px;">${typeLabel}</h1>
        <p style="margin: 4px 0 0; opacity: 0.8; font-size: 14px;">Earth Sanitation — Nouveau lead</p>
      </div>
      <div style="background: #ffffff; padding: 24px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #666; width: 140px;">Nom</td>
            <td style="padding: 8px 0; font-weight: bold;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;">Téléphone</td>
            <td style="padding: 8px 0; font-weight: bold;">
              <a href="tel:${data.phone}" style="color: #1B4332;">${data.phone}</a>
            </td>
          </tr>
          ${data.email ? `
          <tr>
            <td style="padding: 8px 0; color: #666;">Email</td>
            <td style="padding: 8px 0;">
              <a href="mailto:${data.email}" style="color: #1B4332;">${data.email}</a>
            </td>
          </tr>` : ''}
          ${data.clientType ? `
          <tr>
            <td style="padding: 8px 0; color: #666;">Type client</td>
            <td style="padding: 8px 0;">${data.clientType === 'professionnel' ? 'Professionnel' : 'Particulier'}</td>
          </tr>` : ''}
          ${data.company ? `
          <tr>
            <td style="padding: 8px 0; color: #666;">Entreprise</td>
            <td style="padding: 8px 0;">${data.company}</td>
          </tr>` : ''}
          ${data.service ? `
          <tr>
            <td style="padding: 8px 0; color: #666;">Service</td>
            <td style="padding: 8px 0;">${data.service}</td>
          </tr>` : ''}
          ${data.city ? `
          <tr>
            <td style="padding: 8px 0; color: #666;">Ville</td>
            <td style="padding: 8px 0;">${data.city}</td>
          </tr>` : ''}
          ${data.address ? `
          <tr>
            <td style="padding: 8px 0; color: #666;">Adresse</td>
            <td style="padding: 8px 0;">${data.address}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 8px 0; color: #666;">Urgence</td>
            <td style="padding: 8px 0; ${isUrgent ? 'color: #dc2626; font-weight: bold;' : ''}">${urgencyLabel}</td>
          </tr>
        </table>
        <div style="margin-top: 16px; padding: 16px; background: #f9f9f9; border-radius: 6px;">
          <p style="margin: 0 0 4px; color: #666; font-size: 12px; text-transform: uppercase;">Message</p>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
        </div>
        <div style="margin-top: 20px; text-align: center;">
          <a href="https://earth-sanitation.fr/admin/leads" style="display: inline-block; background: #1B4332; color: #F5F1EB; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-size: 14px;">
            Voir dans l'admin
          </a>
        </div>
      </div>
    </div>
  `

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('RESEND_API_KEY manquante — email non envoyé')
    return
  }

  const resend = new Resend(apiKey)
  await resend.emails.send({
    from: 'Earth Sanitation <onboarding@resend.dev>',
    to: NOTIFY_EMAIL,
    subject,
    html,
  })
}
