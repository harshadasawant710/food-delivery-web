import { Response } from "express";
import HTTP_STATUS from '../constants/HttpStatus'
import { MESSAGES } from '../constants/Messages'

class ApiRespone {
    static success(res: Response, statusCode: number, message: string, data: any = null) {
        return res.status(statusCode).json({
            success: true,
            message: message,
            data: data
        })
    }
    static error(res: Response, statusCode: number, message: string) {
        return res.status(statusCode).json({
            sucess: false,
            message: message
        })
    }
}

export default ApiRespone