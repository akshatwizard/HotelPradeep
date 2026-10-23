import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, message, checkIn, checkOut, roomType, noOfRooms, noOfPersons } = body;

        if (!name || !phone || !checkIn || !checkOut || !roomType || !noOfRooms || !noOfPersons) {
            return NextResponse.json({ message: 'All fields are required' });
        }

        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["info@hotelpradeep.com"],
            subject: "New Room Booking Enquiry from Hotel Pradeep Website",
            html: `
            <h3>We have received new Enquiry for Room Booking in Hotel Pradeep with details as provided below:</h3> <br/> 
            <strong>Name:- ${name} <br/> 
            Email:- ${email || ''} <br/> 
            Contact No:- ${phone} <br/>
            Check-In Date:- ${checkIn} <br/>
            Check-Out Date:- ${checkOut} <br/>
            Room Type:- ${roomType} <br/>
            No. of Rooms:- ${noOfRooms} <br/>
            No. of Persons:- ${noOfPersons} <br/>
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