import { Request, Response } from 'express';
import orderModel, { Order } from '../models/orderModel';

class orderController {
    static getAllOrders = async (_req: Request, res: Response) => {
        try {
            const result = await orderModel.getAll();
            res.json(result);
        } catch (err) {
            res.status(400).json({ err });
        }
    };
    static getOrderById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const result = await orderModel.getById(id);
            res.send(result);
        } catch (err) {
            res.status(400).json({ err });
        }
    };
    static getCurrentOrders = async (req: Request, res: Response) => {
        try {
            const id = req.userId;
            const result = await orderModel.getCurrent(id);
            res.send(result);
        } catch (err) {
            res.status(400).json({ err });
        }
    };
    static getCompletedOrders = async (req: Request, res: Response) => {
        try {
            const id = req.userId;
            const result = await orderModel.getCompleted(id);
            res.send(result);
        } catch (err) {
            res.status(400).json({ err });
        }
    };
    static deleteOrderById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await orderModel.deleteById(id);
            res.json({ message: 'User has been deleted' });
        } catch (err) {
            res.status(400).json({ err });
        }
    };
    static registerNewOrder = async (req: Request, res: Response) => {
        try {
            const order: Order = req.body;
            await orderModel.addNew(order, Number(req.userId));
            res.json({ message: 'Order has been created' });
        } catch (err) {
            res.status(400).json({ Errpr: `Error has been occured${err}` });
        }
    };
}
export default orderController;
