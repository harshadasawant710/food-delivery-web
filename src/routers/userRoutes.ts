import express from "express";
const router = express.Router()
import UserController from '../controllers/UserController'
import ValidateMiddleware from '../middlewares/validateMiddleware'
import userValidator from '../validators/userValidator'
import authMiddleware from '../middlewares/authMiddleware'
import adminMiddleware from '../middlewares/adminMiddleware'

const userController = new UserController
router.post('/create',ValidateMiddleware.validate(userValidator) ,userController.createUser)
router.put('/:id',ValidateMiddleware.validate(userValidator), userController.updateUser)
router.delete('/delete/:id', userController.deleteUser)
router.get('/getUser', userController.getAllUsers)
router.get('/login', userController.loginUser)
router.put('/userStatus/:id',authMiddleware,adminMiddleware, userController.updateUserStatus)

export default router