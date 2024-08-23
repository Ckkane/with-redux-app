import mongoose from "mongoose";
import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/Dbconnect";
import NewsModel from "@/app/models/NewsModel";




export async function GET(response : any){
    await dbConnect();


    try {
        const news = await NewsModel.find({})

        return NextResponse.json({
            news: [...news]
        })

    } catch (error) {
        return NextResponse.json({
            message:'error'
        })
    }


}

export async function POST(response : any){
    
    let data = await response.json();

    await dbConnect();

    try {
        const doc = new NewsModel({
            title: data.title,
            description: data.description,
            image: data.image,
            date: Date.now()
        })

        const news = await doc.save();

        return NextResponse.json({
            news
        })

    } catch (error) {
        return NextResponse.json({
            message:'error'
        })
    }
}