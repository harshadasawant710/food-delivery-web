import express from 'express'
const router = express.Router()

import restaurentRoutes from './restaurentRoutes'
import userRoutes from './userRoutes'
import menuCategoryRoutes from './menuCategoryRoutes'
import menuItemRoutes from './menuItemRoutes'

router.use('/restaurent', restaurentRoutes)
router.use('/user', userRoutes)
router.use('/menuCategory', menuCategoryRoutes)
router.use('/menuItem', menuItemRoutes)


export default router