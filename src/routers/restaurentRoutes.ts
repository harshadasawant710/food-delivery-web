import express from "express";
const router = express.Router()
import RestaurantColtroller from '../controllers/RestaurantController'
import ValidateMiddleware from '../middlewares/validateMiddleware'
import restaurantValidator from '../validators/restaurantValidator'
import authMiddleware from '../middlewares/authMiddleware'
import resOwnerMiddleware from '../middlewares/resOwnerMiddleware'

const restaurantController = new RestaurantColtroller
router.post('/create', authMiddleware,resOwnerMiddleware, ValidateMiddleware.validate(restaurantValidator) ,restaurantController.createRestaurant)
router.post('/createBulk', restaurantController.createBulkRestaurant)
router.put('/:id',ValidateMiddleware.validate(restaurantValidator), restaurantController.updateRestaurant)
router.delete('/delete/bulk', restaurantController.deleteMultipelRestaurant)
router.delete('/delete/:id', restaurantController.deleteRestaurant)
router.get('/getRes',restaurantController.getAllRestaurant)

export default router