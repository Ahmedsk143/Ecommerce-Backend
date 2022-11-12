import express from 'express';
import order from '../controllers/orderController';
import AuthMiddleware from '../middlewares/authMiddleware';
const orderRoute = express.Router();
orderRoute.get('/', AuthMiddleware, order.getAllOrders);
orderRoute.post('/', AuthMiddleware, order.registerNewOrder);
orderRoute.get('/:id', AuthMiddleware, order.getOrderById);
orderRoute.delete('/:id', AuthMiddleware, order.deleteOrderById);
export default orderRoute;