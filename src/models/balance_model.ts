import mongoose from 'mongoose'

const { Schema } = mongoose

const balanceSchema = new Schema(
  {
    userId: String,
    amount: Number,
  },
  {
    timestamps: true,
  },
)

export const Balance = mongoose.model('Balance', balanceSchema)
