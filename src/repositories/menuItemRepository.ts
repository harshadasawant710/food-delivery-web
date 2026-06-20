import BaseRepository from "./baseRepository";
import MenuItemModel from '../models/MenuItemModel'

class MenuItemRepository extends BaseRepository{
    constructor(){
        super(MenuItemModel)
    }
    // async findByName(name:string){
    //     return await RestaurentModel.findOne({name})
    // }
    
}

export default MenuItemRepository;