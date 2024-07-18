import mongoose from "mongoose";
import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/Dbconnect";
import UserModel from "@/app/models/UserModel";




export async function POST(response : any){
    
    let data = await response.json();

    await dbConnect();

    try {
        const doc = new UserModel({
            firstName: data.firstName,
            secondName: data.secondName,
            phoneNumber: data.phoneNumber,
            password: data.password
        })

        const user = await doc.save();

        return NextResponse.json({
            user
        })

    } catch (error) {
        return NextResponse.json({
            message:'error'
        })
    }
}