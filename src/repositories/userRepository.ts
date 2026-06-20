import BaseRepository from "./baseRepository";
import UserModel from '../models/userModel'

class userRepository extends BaseRepository{
    constructor(){
        super(UserModel)
    }
    async findByEmail(email:string){
        return await UserModel.findOne({email})
    }
    
}

export default userRepository;