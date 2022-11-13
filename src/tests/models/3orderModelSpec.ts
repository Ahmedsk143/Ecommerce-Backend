import orderModel, { Order } from '../../models/orderModel';

describe('Order Database actions', () => {
    it('Should have an addNew method', () => {
        expect(orderModel.addNew).toBeDefined();
    });
    it('addNew method should create a new order and the created order is equal to the returned order', async () => {
        const order: Order = {
            product_id: 1,
            quantity: 5,
            active: true,
        };
        const result = await orderModel.addNew(order, 1);
        expect(result.user_id).toEqual(1);
        expect(result.product_id).toEqual(1);
    });
    it('Should have a getAll method', () => {
        expect(orderModel.getAll).toBeDefined();
    });
    it('getAll method should return all orders of all users', async () => {
        const result = await orderModel.getAll();
        expect(result).toHaveSize;
    });

    it('getById method should be defined', async () => {
        expect(orderModel.getById).toBeDefined();
    });
    it('getById method should return the correct order data', async () => {
        const order: Order = await orderModel.getById('1');
        expect(order.id).toEqual(1);
    });
    it('getCurrent method should be defined', async () => {
        expect(orderModel.getById).toBeDefined();
    });
    it('getCurrent method should return the correct order data of the correct user', async () => {
        const order: Order = await orderModel.getCurrent('1');
        expect(order.user_id).toEqual(1);
    });
});
