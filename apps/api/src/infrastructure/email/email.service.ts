/**
 * Email Service
 *
 * Sends transactional emails via SMTP (Nodemailer).
 * Supports templates for common email types.
 */

import nodemailer, { Transporter } from 'nodemailer';
import { config } from '@/config';
import { logger } from '../logger';

class EmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: config.email.host,
      port: config.email.port,
      secure: config.email.port === 465,
      auth: {
        user: config.email.user,
        pass: config.email.password,
      },
    });
  }

  async sendMail(to: string, subject: string, html: string) {
    try {
      await this.transporter.sendMail({
        from: config.email.from,
        to,
        subject,
        html,
      });
      logger.info({ to, subject }, 'Email sent');
    } catch (error) {
      logger.error({ error, to, subject }, 'Failed to send email');
      throw error;
    }
  }

  async sendPasswordReset(to: string, resetUrl: string) {
    const html = `
      <h2>Password Reset</h2>
      <p>Click the link below to reset your password:</p>
      <a href="${resetUrl}">Reset Password</a>
      <p>This link expires in 1 hour.</p>
    `;
    await this.sendMail(to, 'PlaySchl - Password Reset', html);
  }

  async sendWelcome(to: string, name: string) {
    const html = `
      <h2>Welcome to PlaySchl, ${name}!</h2>
      <p>Your account has been created successfully.</p>
    `;
    await this.sendMail(to, 'Welcome to PlaySchl', html);
  }
}

export const emailService = new EmailService();
