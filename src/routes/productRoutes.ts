import express from 'express';
import product from '../controllers/productController';
import AuthMiddleware from '../middlewares/authMiddleware';
const productRoute = express.Router();
productRoute.get('/', product.getAllProducts);
productRoute.post('/', AuthMiddleware, product.registerNewProduct);
productRoute.get('/:id', product.getProductById);
productRoute.delete('/:id', AuthMiddleware, product.deleteProductById);
export default productRoute;
