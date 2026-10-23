import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        if (!name || !phone || !email || !message) {
            return NextResponse.json({ message: 'All fields are required' });
        }

        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["info@hotelpradeep.com"],
            subject: "Feedback Message from Hotel Pradeep Website Contact Page",
            html: `
            <h3>We have received new Feedback Message from Hotel Pradeep Website Contact Page with details as given below:</h3> <br/> 
            <strong>Name:- ${name} <br/> 
            Email:- ${email || ''} <br/> 
            Contact No:- ${phone} <br/>
            Message:- ${message || ''} <br/> </strong>`,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }
        return NextResponse.json(
            { message: "Email sent successfully", data },
            { status: 200 }
        );
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: error.message });
    }

}