const { v4 } = require("uuid")
const mongoose = require("mongoose")

 
const Blog_collection = new mongoose.Schema( {
    userId: {
        type: String,
        default: v4,
    },
    UserName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'email is required..'],
        match: [/@(gmail|outlook|ymail)\.com(\.(in|org|net|uk))?$/i, 'Please provide a proper email'],

    },
    password: {
        type: String,
    },
    PhoneNum: {
        type: Number,
        required: [true, 'email is required..'],
        unique: true,
        match: /^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$/,
        trim: true
    },
    bio: {
        type: String
    },
    blog_id: {
        type: String, 
        default: v4,
    },
    title: {
        type: String,

    },
    tag:{
        enum:["sample","test","blogs"]
    },
    published_date:{
        type:Date,
        
    },
    status:{
        enum:["published", "unpublished"]
    },
    likes:{
        enum:["yes", "no"]
    }
},{timestamps:true});

const Blog_model = mongoose.model("Blog_Reg", Blog_collection)
module.exports = Blog_model