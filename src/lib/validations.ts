import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  email: z.string().email('Email invalide').optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  type: z.enum(['CONTACT', 'QUOTE', 'EMERGENCY']),
})

export type ContactFormData = z.infer<typeof contactSchema>
