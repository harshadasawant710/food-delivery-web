import express from 'express';
import MenuItemController  from '../controllers/MenuItemController';
import validateMiddleware from '../middlewares/validateMiddleware';
import menuItemValidator from '../validators/menuItemValidator';
import resOwnerMiddleware from '../middlewares/resOwnerMiddleware'
import authMiddleware from '../middlewares/authMiddleware'
const router = express.Router();

const menuItemController = new MenuItemController();

router.post('/create',authMiddleware,resOwnerMiddleware,validateMiddleware.validate(menuItemValidator) , menuItemController.createMenuItem);
router.post('/create/bulk', menuItemController.createBulkMenuItem)
router.put('/:id', validateMiddleware.validate(menuItemValidator) ,menuItemController.updateMenuItem);
router.delete('/delete/bulk', menuItemController.deleteBulkMenuItem)
router.delete('/delete/:id', menuItemController.deleteMenuItem);
router.get('/', menuItemController.getAllMenuItem)

export default router;