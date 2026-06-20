import mongoose, { Schema } from "mongoose";
import RestaurentInterface from "../interfaces/restaurentInterface";

const restaurentSchema = new Schema<RestaurentInterface>({
    name: {
        type: String,
        minLength: [3, 'Name must be at least 3 characters.'],
        maxLength: [20, 'Name cannot exceed 20 characters.'], 
        trim: true,
        required: [true, 'Name is required.'],
    },
    address: {
        addressLane: {
            type: String
        },
        city: {
            type: String,
            minLength: [3, 'City must be at least 3 characters.'],
            maxLength: [20, 'City cannot exceed 20 characters.'], 
            trim: true,
        },
        state: {
            type: String,
            minLength: [3, 'State must be at least 3 characters.'],
            maxLength: [20, 'State cannot exceed 20 characters.'], 
            trim: true,
        },
        pincode: {
            type: Number,
            required: [true, 'Pincode is required.'],
        }
    },
    cuisine: {
        type: [String],
        default: [],
        required: [true, 'Cuisine is required.']
    },
    phone: {
    type: Number,
    required: [true, 'Phone number is required.']
},
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    description: {
        type: String,
        minLength: [10, 'Description must be at least 10 characters.'],
        maxLength: [100, 'Description cannot exceed 100 characters.'], // FIX: Capital L & Fixed Error text
        required: [true, 'Description is required.']
    },
    offers: {
        type: String,
        required: [true, 'Offers is required.']
    },
    ETA: {
        type: Number,
        required: [true, 'ETA is required.']
    },
    openingTime: {
        type: Date,
        required: [true, 'Opening time is required.']
    },
    closingTime: {
        type: Date,
        required: [true, 'Closing time is required.']
    },
    isApproved: {
        type: Boolean,
        default: false,
        required: [true, 'Approval status is required.']
    },
    category: {
        type: String,
        required: [true, 'Category is required.']
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Owner ID is required.']
    }
});

const Restaurent =
    mongoose.models.Restaurent ||
    mongoose.model<RestaurentInterface>("Restaurent", restaurentSchema);

export default Restaurent;