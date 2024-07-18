import mongoose, { Document, Schema } from "mongoose";

export interface IUserModel extends Document{
    name: string,
    price: number,
    description: string
}

const userSchema: Schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    login:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
})

export default mongoose.model<IUserModel>('User', userSchema);