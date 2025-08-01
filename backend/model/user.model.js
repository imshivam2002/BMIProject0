// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// }, { timestamps: true });

// // Hash password before saving
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// const User = mongoose.model('User', userSchema);
// export default User;


import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    verified:{
        type:Boolean,
        default: false
    }
});

export const User = mongoose.model("user",userSchema);