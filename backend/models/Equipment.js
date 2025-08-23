import mongoose from "mongoose";

const EquipmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  pricePerDay: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  certificateUrl: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Equipment", EquipmentSchema);
