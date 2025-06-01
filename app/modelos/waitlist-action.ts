"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function joinWaitlist(formData: FormData) {
  const email = formData.get("email") as string
  const model = formData.get("model") as string

  if (!email) {
    throw new Error("Email is required")
  }

  try {
    console.log(`Attempting to send emails for: ${email}, model: ${model}`)

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: "RuedaTec <noreply@ai-knows.me>",
      to: [email],
      subject: `¡Bienvenido a la lista de espera de ${model}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #3b82f6; margin: 0;">¡Gracias por unirte a RuedaTec!</h1>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 15px 0; font-size: 16px;">Hola,</p>
            <p style="margin: 0 0 15px 0;">Te has unido exitosamente a nuestra lista de espera para <strong style="color: #3b82f6;">${model}</strong>.</p>
            <p style="margin: 0 0 15px 0;">Te contactaremos pronto con más información sobre el lanzamiento y disponibilidad.</p>
            <p style="margin: 0;">Mientras tanto, síguenos en nuestras redes sociales para estar al día con las últimas novedades.</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="margin: 0 0 10px 0;">¡Gracias por confiar en RuedaTec!</p>
            <p style="margin: 0; font-weight: bold; color: #3b82f6;">El equipo de RuedaTec</p>
          </div>
        </div>
      `,
    })

    console.log("User email result:", userEmailResult)

    // Send notification email to team
    const teamEmailResult = await resend.emails.send({
      from: "RuedaTec Waitlist <noreply@ai-knows.me>",
      to: ["soporte@ruedatec,com"],
      subject: `Nueva suscripción a lista de espera - ${model}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #3b82f6; margin-bottom: 20px;">Nueva suscripción a lista de espera</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0 0 10px 0;"><strong>Modelo de interés:</strong> ${model}</p>
            <p style="margin: 0;"><strong>Fecha:</strong> ${new Date().toLocaleString("es-MX", {
              timeZone: "America/Mexico_City",
            })}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-weight: bold;">Acción requerida:</p>
            <p style="margin: 5px 0 0 0; color: #1e40af;">Considera contactar a este usuario para más información sobre sus necesidades.</p>
          </div>
        </div>
      `,
    })

    console.log("Team email result:", teamEmailResult)
    console.log(`Waitlist signup successful: ${email} for ${model}`)

    return { success: true }
  } catch (error) {
    console.error("Error sending emails:", error)

    // Log more details about the error
    if (error instanceof Error) {
      console.error("Error message:", error.message)
      console.error("Error stack:", error.stack)
    }

    throw new Error("Error al procesar la suscripción")
  }
}
