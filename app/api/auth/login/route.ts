import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/Dbconnect";
import UserModel from "@/app/models/UserModel";
var jwt = require('jsonwebtoken');


let token = jwt.sign({
    data: 'foobar'
  }, 'secret', { expiresIn: 15 * 60 });


export async function POST(response : any){

    let data = await response.json();
    await dbConnect();
        
    try {
        const user = UserModel.findOne({ email: data.email }).exec()
        
        user.then((data) => console.log(data))

        return NextResponse.json({
            user
        })

    } catch (error) {
        return NextResponse.json({
            message:'error'
        })
    }
}