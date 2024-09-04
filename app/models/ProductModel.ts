import mongoose, { Document, Schema } from "mongoose";


const productSchema: Schema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        default: ''
    },
    image:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    popular:{
        type: Number,
        default: 0
    },
    rating:{
        type: Number,
        default: 0
    },
    count:{
        type: Number,
        default: 1
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        require: true
    }
})

export default mongoose.models.Product || mongoose.model('Product', productSchema);