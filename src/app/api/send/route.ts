import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);

export async function POST({ name, email, message }: {
    name: string,
    email: string,
    message: string
}) {
    try {
        const data = await resend.emails.send({
            from: 'Info <info@iidev.us>',
            to: ['ilya.ilyich1105@gmail.com'],
            subject: 'New application',
            react: EmailTemplate({ name, email, message }),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
