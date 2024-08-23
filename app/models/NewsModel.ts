import mongoose, { Document, Schema } from "mongoose";


const newsSchema: Schema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
    },
    date:{
        type: Number,
        timestamps: true
    }
})

export default mongoose.models.News || mongoose.model('News', newsSchema);