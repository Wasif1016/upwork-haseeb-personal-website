import nodemailer from 'nodemailer'

let transporterInstance: ReturnType<typeof nodemailer.createTransport> | null = null;

export function getTransporter() {
  if (transporterInstance) {
    return transporterInstance;
  }
  
  const user = process.env.BREVO_USER;
  const pass = process.env.BREVO_PASSWORD;
  
  if (!user || !pass) {
    throw new Error('BREVO_USER and BREVO_PASSWORD environment variables are required');
  }
  
  transporterInstance = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: pass,
    },
  });
  
  return transporterInstance;
}

// Export a lazy transporter for backward compatibility
export const transporter = new Proxy({} as ReturnType<typeof nodemailer.createTransport>, {
  get(_target, prop) {
    const trans = getTransporter();
    const value = trans[prop as keyof ReturnType<typeof nodemailer.createTransport>];
    if (typeof value === 'function') {
      return value.bind(trans);
    }
    return value;
  }
});
