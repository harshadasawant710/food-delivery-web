import mongoose, { Schema } from "mongoose";
import MenuCategoryInterface from "../interfaces/menuCategoryiInterface";

const menuCategorySchema = new Schema<MenuCategoryInterface>({
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
    category: {
        type: String,
        required: [true, 'category is required.']
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurent',
        required: [true, 'Restaurent is required.']
    }
});

const MenuCategory =
    mongoose.models.MenuCategory ||
    mongoose.model<MenuCategoryInterface>("MenuCategory", menuCategorySchema);

export default MenuCategory;