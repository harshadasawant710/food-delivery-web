import express from 'express';
import MenuCategoryController  from '../controllers/MenuCategoryController';
import validateMiddleware from '../middlewares/validateMiddleware';
import MenuCategoryService from '../validators/menuCategoryValidator';
import resOwnerMiddleware from '../middlewares/resOwnerMiddleware'
import authMiddleware from '../middlewares/authMiddleware'

const router = express.Router();

const menuCategoryController = new MenuCategoryController();

router.post('/create',authMiddleware, resOwnerMiddleware,validateMiddleware.validate(MenuCategoryService) , menuCategoryController.createMenuCategory);
router.post('/create/bulk', menuCategoryController.createBulkMenuCategory)
router.put('/:id', validateMiddleware.validate(MenuCategoryService) ,menuCategoryController.updateMenuCategory);
router.delete('/delete/bulk', menuCategoryController.deleteBulkMenuCategory)

router.delete('/delete/:id', menuCategoryController.deleteMenuCategory);
router.get('/', menuCategoryController.getAllMenuCategory)

export default router;