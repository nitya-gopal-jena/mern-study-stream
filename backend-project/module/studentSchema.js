import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    email: { required: true, unique: true, type: String },
    password: { required: true, type: String },
    name: { required: true, type: String },
    age: { required: true, type: Number },

    otp: { type: String },
    otpExpiry: { type: Number }
})


export const Student = mongoose.model('student', studentSchema);