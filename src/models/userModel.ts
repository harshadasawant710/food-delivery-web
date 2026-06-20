import mongoose, { Schema } from "mongoose";
import UserInterface from "../interfaces/userInterface";

const userSchema = new Schema<UserInterface>({
  name: {
    type: String,
    minLength: [3, 'Name must be atleast 3 character.'],
    maxlength: [20, 'Name must be exceed till 20 character.'],
    trim: true,
    required: [true, 'Name is required.'],
  },
  email: {
    type: String,
    required: [true, 'Email is reqiured.'],
    trim: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address"]
  },
  password: {
    type: String,
    // minLength: [6, 'Password must be atleast 6 character.'],
    // maxlength: [20, 'Password must be exceed till 20 character.'],
    trim: true,
    required: [true, 'Password is required.'],
  },
  role: {
    type: String,
    enum: {
      values: ["ADMIN", "RES_OWNER"],
      message: 'This ROLE is not valid.'
    },
  },
  status: {
    type: String,
    default: "INACTIVE",
    enum: {
      values: ["ACTIVE", "INACTIVE", "PENDING", "BLOCKED"],
      message: 'This status is not valid.'
    },
  },
  address: {
    city: {
      type: String,
      minLength: [3, 'city must be atleast 3 character.'],
      maxlength: [20, 'city must be exceed till 20 character.'],
      trim: true,
    },
    state: {
      type: String,
      minLength: [3, 'state must be atleast 3 character.'],
      maxlength: [20, 'state must be exceed till 20 character.'],
      trim: true,
    },
    pincode: {
      type: Number,
      min: [4, 'pincode must be atleast 18'],
      required: [true, 'pincode is required.'],
    },

  },
  phone: {
    type: Number,
     match: [/^[6-9]\d{9}$/, "Please enter a valid Indian mobile number"],
    required: [true, 'Name is required.']
  },

});

const User =
  mongoose.models.Student ||
  mongoose.model<UserInterface>("User", userSchema);

export default User;