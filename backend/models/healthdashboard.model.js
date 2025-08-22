import mongoose from 'mongoose';

const healthdashboardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  loanAmount: Number,
  interest: Number,
  tenure: Number,
  cropType: String,
  landSize: Number,
  location: String,
  expenses: [
    {
      description: String,
      amount: Number,
      date: { type: Date, default: Date.now }
    }
  ],
  estimatedIncome: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('healthdashboard', healthdashboardSchema);