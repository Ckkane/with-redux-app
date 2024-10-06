import mongoose from "mongoose";
import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/Dbconnect";
import NewsModel from "@/app/models/NewsModel";




export async function GET(){
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

export async function PATCH(response : any){
    await dbConnect();


    let data = await response.json();

    console.log(data)

    try {
        const news = await NewsModel.findOne(data)

        console.log(news)

        return NextResponse.json({
            news
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