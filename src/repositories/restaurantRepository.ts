import BaseRepository from "./baseRepository";
import RestaurentModel from '../models/restaurentModel'

class RestaurentRepository extends BaseRepository{
    constructor(){
        super(RestaurentModel)
    }
    async findByName(name:string){
        return await RestaurentModel.findOne({name})
    }
    
}

export default RestaurentRepository;