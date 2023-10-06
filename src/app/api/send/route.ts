import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: any) {
    try {
        const body = await request.json();

        const { name, email, message } = body;
        const data = await resend.emails.send({
            from: 'Info <info@iidev.us>',
            to: ['ilya.ilyich1105@gmail.com'],
            reply_to: email,
            subject: 'New application',
            react: EmailTemplate({ name, email, message }),
            text: ''
        });
        if ((data as any).status === "success") {
            return NextResponse.json({ message: "Email Successfully Sent!" })
        }
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}