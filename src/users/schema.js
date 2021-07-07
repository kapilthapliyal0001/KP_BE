import mongoose from "mongoose";
const {Schema, model} = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  {
    timeStamp: true, // will add the time stamp for the Game Played!
  }
);

export default model("kaspersky_users", userSchema);
