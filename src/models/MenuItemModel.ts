import mongoose, { Schema } from "mongoose";
import MenuItemInterface from "../interfaces/menuItemInterface";
import { date, number } from "joi";

const menuItemSchema = new Schema<MenuItemInterface>({
    name: {
        type: String,
        minLength: [3, 'Name must be atleast 3 character.'],
        maxlength: [20, 'Name must be exceed till 20 character.'],
        trim: true,
        required: [true, 'Name is required.'],
    },
    description: {
        type: String,
        minLength: [10, 'Description must be atleast 3 character.'],
        maxlength: [100, 'Description must be exceed till 20 character.'],
        required: [true, 'Description is required.']
    },
    price: {
        type: Number,
        min: 1,
        max: 100000,
        required: [true, 'price is required.']
    },
    imgURL: {
        type: String,
        default: '',
        required: [true, 'imgURL is required.']
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        required: [true, 'Rating is required.']
    },
    isCustomisable: {
        type: Boolean,
        default: false,
        required: [true, 'customisable is required.']
    },
    isAvailabel: {
        type: Boolean,
        default: false,
        required: [true, 'isAvailabel is required.']
    },
    isVeg: {
        type: Boolean,
        default: false,
        required: [true, 'isAvailabel is required.']
    },
    calories: {
        type: Number,
        min: 0,
        max: 3000,
        required: [true, 'Rating is required.']
    }, 
    menuCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenuCategory',
        required: [true, 'ownerId is required.']
    },
});

const MenuItem =
    mongoose.models.MenuItem ||
    mongoose.model<MenuItemInterface>("MenuItem", menuItemSchema);

export default MenuItem;