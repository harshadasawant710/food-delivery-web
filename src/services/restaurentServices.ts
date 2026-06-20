import { MESSAGES } from "../constants/Messages";
import RestaurantRepository from "../repositories/restaurantRepository";
import ConflictError from '../utils/errors/ConfilctError'
import NotFoundError from '../utils/errors/NotFoundError'
import InternalError from '../utils/errors/InternalEror'


class RestaurantService {
    public restaurantRepository: RestaurantRepository
    constructor() {
        this.restaurantRepository = new RestaurantRepository()
    }
    async createRestaurant(restaurantData: any) {
        const existingRestaurant = await this.restaurantRepository.findByName(restaurantData.name)
        if (existingRestaurant) {
            // throw new Error("Restaurant already exist! - service")

            throw new ConflictError(MESSAGES.ALREADY_EXISTS)
        }

        const savedRestaurant = await this.restaurantRepository.create(restaurantData)
        return savedRestaurant
    }

    async createMultipelRestaurant(restaurantData: any) {
        const result: {
            created: any[];
            failed: { data: any, error: string }[];
            total: number;
        } = {
            created: [],
            failed: [],
            total: restaurantData.length
        };
        for (const restaurant of restaurantData) {
            try {
                const createdRestaurant = await this.createRestaurant(restaurant)
                result.created.push(createdRestaurant)
            } catch (error: any) {
                result.failed.push({
                    data: restaurant,
                    error: error.message
                })
            }
        }
        return result;

    }

    async getAllRestaurant(filter = {}, options: any = {}) {
        const restaurant = await this.restaurantRepository.findAll(filter, options)
        return restaurant
    }

    async getRestaurantById(id: string) {
        const restaurant = await this.restaurantRepository.findById(id)
        if (!restaurant) {
            throw new NotFoundError(MESSAGES.NOT_FOUND)
        }
        return restaurant
    }

    async updateRestaurant(id: string, updateData: any) {
        const restaurant = await this.restaurantRepository.updateById(id, updateData)
        if (!restaurant) {
            throw new NotFoundError(MESSAGES.NOT_FOUND)
        }
        return restaurant
    }

    async deleteRestaurant(id: string) {
        const restaurant = await this.restaurantRepository.deleteById(id)
        if (!restaurant) {
            throw new NotFoundError(MESSAGES.NOT_FOUND)
        }
        return restaurant
    }

    async deleteBulkReastaurant(ids: string[]) {
        const result: {
            deleted: any[],
            failed: { id: any; error: string }[],
            total: number;
        } = {
            deleted: [],
            failed: [],
            total: ids.length
        }

        for (const id of ids) {
            try {
                const deletedRestaurant = await this.restaurantRepository.deleteById(id)
                result.deleted.push(deletedRestaurant)
            } catch (error: any) {
                result.failed.push({
                    id,
                    error: error.message
                })
            }
        }

        return result
    }
}

export default RestaurantService