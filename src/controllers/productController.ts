import { Request, Response } from 'express';
import productModel, { Product } from '../models/productModel';

class productController {
    static getAllProducts = async (_req: Request, res: Response) => {
        try {
            const result = await productModel.getAll();
            res.json(result);
        } catch (err) {
            res.status(400).json({ error: `An error occured ${err}` });
        }
    };
    static getProductById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const result = await productModel.getById(id);
            res.send(result);
        } catch (err) {
            res.status(400).json({ error: `An error occured ${err}` });
        }
    };
    static deleteProductById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await productModel.deleteById(id);
            res.json({ message: 'Product has been deleted' });
        } catch (err) {
            res.status(400).json({ error: `An error occured ${err}` });
        }
    };
    static registerNewProduct = async (req: Request, res: Response) => {
        try {
            const product: Product = req.body;
            console.log(req.userId);
            product.userId = Number(req.userId);
            await productModel.addNew(product);
            res.json({ message: 'Product has been created' });
        } catch (err) {
            res.status(400).json({ error: `An error occured ${err}` });
        }
    };
}
export default productController;
