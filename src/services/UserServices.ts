import  MESSAGES  from "../constants/Messages";
import UserRepository from "../repositories/userRepository";
import ConflictError from '../utils/errors/ConfilctError'
import NotFoundError from '../utils/errors/NotFoundError'

class UserServices {
    public userRepository: UserRepository
    constructor() {
        this.userRepository = new UserRepository()
    }
    async createUser(UserData: any) {
        const existingUser = await this.userRepository.findByEmail(UserData.email)
        if (existingUser) {
            // throw new Error("User already exist! - service")

            throw new ConflictError(MESSAGES.ALREADY_EXISTS)
        }

        const savedUser = await this.userRepository.create(UserData)
        return savedUser
    }

    async createMultipelUser(UserData: any) {
        const result: {
            created: any[];
            failed: { data: any, error: string }[];
            total: number;
        } = {
            created: [],
            failed: [],
            total: UserData.length
        };
        for (const User of UserData) {
            try {
                const createdUser = await this.createUser(User)
                result.created.push(createdUser)
            } catch (error: any) {
                result.failed.push({
                    data: User,
                    error: error.message
                })
            }
        }
        return result;

    }

    async getAllUsers(filter = {}, options: any = {}) {
        const users = await this.userRepository.findAll(filter, options)
        return users
       
    }

    async getUserByEmail(email: string) {
            const user = await this.userRepository.findByEmail(email)
            if (!user) {
                throw new NotFoundError(MESSAGES.NOT_FOUND)
            }
            return user
    }

    async updateUser(id: string, updateData: any) {
            const user = await this.userRepository.updateById(id, updateData)
            if (!user) {
                throw new NotFoundError(MESSAGES.NOT_FOUND)
            }
            return user
    }

    async deleteUser(id: string) {
            const user = await this.userRepository.deleteById(id)
            if (!user) {
                throw new NotFoundError(MESSAGES.NOT_FOUND)
            }
            return user
    }
}

export default UserServices