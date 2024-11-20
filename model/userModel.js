import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String, // Changed to `String` for email (logical error fix)
      required: true,
    },
    address: {
      type: String, // Changed to `String` for address (logical error fix)
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

// Check if the model is already compiled before defining it
const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
