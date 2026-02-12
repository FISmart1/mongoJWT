const mongoose = require('mongoose')

const financeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: [true, 'Judul diperlukan'],
    },
    amount: {
      type: Number,
      required: [true, 'Jumlah diperlukan'],
    },
    type: {
      type: String,
      required: [true, 'Tipe diperlukan'],
      enum: ['income', 'expense'], // income = pemasukan, expense = pengeluaran
    },
  },
  {
    timestamps: true, // mencatat waktu dibuat & diubah
  }
)

module.exports = mongoose.model('Finance', financeSchema)
