import RestaurantService from '../services/restaurentServices'
import { Request, Response } from 'express';
import HTTP_STATUS from '../constants/HttpStatus'
import MESSAGES from '../constants/Messages'
import ApiRespone from '../utils/ApiResponse'
import AsyncHandler from '../middlewares/AsyncHandler'

class RestaurantColtroller {
    private restaurantService: RestaurantService
    constructor() {
        this.restaurantService = new RestaurantService;
    }

    createRestaurant = AsyncHandler(async (req: Request, res: Response) => {
        const restaurantData = req.body
        const restaurant = await this.restaurantService.createRestaurant(restaurantData)

        return ApiRespone.success(
            res,
            HTTP_STATUS.CREATED,
            MESSAGES.CREATED,
            restaurant)
    })

    createBulkRestaurant = AsyncHandler(async (req: Request, res: Response) => {
        const { restaurants } = req.body;
        if (!Array.isArray(restaurants)) {
            return ApiRespone.success(res, HTTP_STATUS.BAD_REQUEST, MESSAGES.INVALID_PAYLOAD)
        }

        const result = await this.restaurantService.createMultipelRestaurant(restaurants);
        const statusCode = result.failed.length === 0 ? HTTP_STATUS.CREATED : HTTP_STATUS.PARTIAL_SUCCESS
        return ApiRespone.success(res, statusCode, MESSAGES.CREATED, result)

    })

    getAllRestaurant = AsyncHandler(async (req: Request, res: Response) => {
        const {
            page = "1",
            limit = "10",
            search,
            city,
            isApproved,
            sortBy = "name",
            sortOrder = "asc",
        } = req.query;

        const filter: any = {};

        if (search) {
            filter.name = {
                $regex: search,
                $options: "i",
            };
        }

        if (city) {
            filter["address.city"] = city;
        }

        if (isApproved !== undefined) {
            filter.isApproved = isApproved === "true";
        }

        const options = {
            skip: (Number(page) - 1) * Number(limit),
            limit: Number(limit),
            sort: {
                [sortBy as string]: sortOrder === "asc" ? 1 : -1,
            },
        };

        const restaurants = await this.restaurantService.getAllRestaurant(filter, options);

        return ApiRespone.success(res, HTTP_STATUS.OK, MESSAGES.FETCHED_ALL, restaurants)

    });

    updateRestaurant = AsyncHandler(async (req: Request, res: Response) => {
        const id: string = req.params.id as string
        const updateData = req.body
        const restaurant = await this.restaurantService.updateRestaurant(id, updateData)

        return ApiRespone.success(res, HTTP_STATUS.CREATED, MESSAGES.UPDATED, restaurant)
    })

    deleteRestaurant = AsyncHandler(async (req: Request, res: Response) => {
        const id: string = req.params.id as string
        const restaurant = await this.restaurantService.deleteRestaurant(id)

        return ApiRespone.success(res, HTTP_STATUS.OK, MESSAGES.DELETED, restaurant)
    })

    deleteMultipelRestaurant = AsyncHandler(async (req: Request, res: Response) => {
        const { ids } = req.body

        if (!Array.isArray(ids)) {
            return ApiRespone.success(res, HTTP_STATUS.BAD_REQUEST, MESSAGES.INVALID_PAYLOAD)
        }
        const result = await this.restaurantService.deleteBulkReastaurant(ids);
        const statusCode = result.failed.length === 0 ? HTTP_STATUS.OK : HTTP_STATUS.PARTIAL_SUCCESS
        return ApiRespone.success(res, statusCode, MESSAGES.DELETED, result)
    })
}

export default RestaurantColtroller

