import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: String,
    phoneNumber: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  },
)

export const User = mongoose.model('User', userSchema)
