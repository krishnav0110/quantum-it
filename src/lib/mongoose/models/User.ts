import mongoose, { InferSchemaType } from "mongoose";

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  dob: {
    type: Date,
    required: true,
  },
});

export const UserModel = mongoose.models?.user || mongoose.model("user", schema);

export type User = InferSchemaType<typeof schema>;
