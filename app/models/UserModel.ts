import mongoose, { Document, Schema } from "mongoose";


const userSchema: Schema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    secondName:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

export default mongoose.model('User', userSchema);