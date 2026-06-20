import BaseRepository from "./baseRepository";
import MenuCategory from '../models/MenuCategoryModel'

class MenuCategoryRepository extends BaseRepository{
    constructor(){
        super(MenuCategory)
    }
    // async findByName(name:string){
    //     return await RestaurentModel.findOne({name})
    // }
    
}

export default MenuCategoryRepository;