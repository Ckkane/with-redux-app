import mongoose from "mongoose";
import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/Dbconnect";
import ProdctModel from "@/app/models/ProductModel";


export async function POST(response : any){
    
    let data = await response.json();

    await dbConnect();

    try {
        const product = await ProdctModel.find(data)

        return NextResponse.json({
            product
        })

    } catch (error) {
        return NextResponse.json({
            message:'error'
        })
    }
}

export async function PATCH(response : any){
    
    let data = await response.json();

    await dbConnect();

    try {
        const doc = new ProdctModel({
            title: data.title,
            description: data.description,
            image: data.image,
            category: data.category,
            discount: data.discount,
            price: data.price
        })

        const product = await doc.save();

        return NextResponse.json({
            product
        })

    } catch (error) {
        return NextResponse.json({
            message:'error'
        })
    }
}