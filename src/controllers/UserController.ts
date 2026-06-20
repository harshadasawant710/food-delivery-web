import UserServices from '../services/UserServices'
import { Request, Response } from 'express';
import HTTP_STATUS from '../constants/HttpStatus'
import MESSAGES from '../constants/Messages'
import ApiRespone from '../utils/ApiResponse'
import AsyncHandler from '../middlewares/AsyncHandler'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const JWT_SECRET = 'my_super_secret_key'

class UserController {
    private userService: UserServices
    constructor() {
        this.userService = new UserServices();
    }

    createUser = AsyncHandler(async (req: Request, res: Response) => {
        const userData = req.body
        userData.password = await bcrypt.hash(userData.password, 10)
        const user = await this.userService.createUser(userData)
        return ApiRespone.success(
            res,
            HTTP_STATUS.CREATED,
            MESSAGES.CREATED,
            user)
    })

    getAllUsers = AsyncHandler(async (req: Request, res: Response) => {
        const {
            page = "1",
            limit = "10",
            search,
            city,
            status,
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

        if (status !== undefined) {
            filter.status = status;
        }

        const options = {
            skip: (Number(page) - 1) * Number(limit),
            limit: Number(limit),
            sort: {
                [sortBy as string]: sortOrder === "asc" ? 1 : -1,
            },
        };

        const users = await this.userService.getAllUsers(filter, options);

        return ApiRespone.success(res, HTTP_STATUS.OK, MESSAGES.FETCHED_ALL, users)

    });

    updateUser = AsyncHandler(async (req: Request, res: Response) => {
        const id: string = req.params.id as string
        const updateData = req.body
        const user = await this.userService.updateUser(id, updateData)

        return ApiRespone.success(res, HTTP_STATUS.CREATED, MESSAGES.UPDATED, user)
    })

    deleteUser = AsyncHandler(async (req: Request, res: Response) => {
        const id: string = req.params.id as string
        const user = await this.userService.deleteUser(id)

        return ApiRespone.success(res, HTTP_STATUS.OK, MESSAGES.DELETED, user)
    })

    loginUser = AsyncHandler(async (req: Request, res: Response) => {
        const { email, password } = req.body;

        const user = await this.userService.getUserByEmail(email);

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = jwt.sign(
                {
                    userId: user._id,
                    role: user.role
                },
                JWT_SECRET,
                {
                    expiresIn: "1h"
                }
            );
            return ApiRespone.success(
                res,
                HTTP_STATUS.OK,
                MESSAGES.FETCHED,
                { token },
            );
        } else {
            res.status(400).json({
                message: "email / password is wrong"
            })
        }

    });

    updateUserStatus = AsyncHandler(async (req: Request, res: Response) => {
        const id: string = req.params.id as string
        const { status } = req.body;
        const user = await this.userService.userStatus(id, {
            status,
        });

        return ApiRespone.success(
            res,
            HTTP_STATUS.OK,
            MESSAGES.UPDATEDSTATUS,
            user
        );
    });
}

export default UserController

