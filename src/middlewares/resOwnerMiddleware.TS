import { Request, Response, NextFunction } from "express";
import HTTP_STATUS from "../constants/HttpStatus";
import MESSAGES from "../constants/Messages";
import ApiResponse from "../utils/ApiResponse";

const resOwnerMiddleware = (req: any, res: Response, next: NextFunction) => {
  try {
    const user = req.user
    if (!user) {
      return ApiResponse.error(
        res,
        HTTP_STATUS.UNAUTHORIZED,
        MESSAGES.UNAUTHORIZED
      );
    }

    if (user.role !== "RES_OWNER") {
      return ApiResponse.error(
        res,
        HTTP_STATUS.FORBIDDEN,
        "Only for RES_OWNER"
      );
    }

    next();
  } catch (error: any) {
    return ApiResponse.error(
      res,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      error.message
    );
  }
};

export default resOwnerMiddleware;