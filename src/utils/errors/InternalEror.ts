import AppError from "./AppError";
import HTTP_STATUS from '../../constants/HttpStatus'

class InternalError extends AppError{
    constructor(message: string) {
        super(message, HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
}

export default InternalError
