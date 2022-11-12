import DBConnection from '../database';
import * as dotenv from 'dotenv';
dotenv.config();

export type Order = {
    id: number;
    product_id: number;
    quantity: number;
    user_id: number;
    active?: boolean;
};
class OrderModel {
    async getAll(): Promise<Order[]> {
        try {
            const conn = await DBConnection.connect();
            const sql = 'select * from orders';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`Cannont get the orders ${err}`);
        }
    }
    async addNew(order: Order): Promise<Order> {
        try {
            const conn = await DBConnection.connect();
            const sql =
                'insert into orders(product_id, quantity, user_id, active) values($1, $2, $3, $4)';
            const values: unknown[] = [
                order.product_id,
                order.quantity,
                order.user_id,
            ];
            if (order.active) {
                values.push(order.active);
            } else {
                values.push(true);
            }
            const result = await conn.query(sql, values);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Cannont add the order ${err}`);
        }
    }
    async getById(id: string): Promise<Order> {
        try {
            const conn = await DBConnection.connect();
            const sql = 'select * from orders where id=$1 ';
            const values = [id];
            const result = await conn.query(sql, values);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Cannont get the order ${err}`);
        }
    }
    async getCurrentOrders(id: string): Promise<Order> {
        try {
            const conn = await DBConnection.connect();
            const sql = 'select * from orders where id=$1 AND active=true';
            const values = [id];
            const result = await conn.query(sql, values);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Cannont get the order ${err}`);
        }
    }
    async getCompletedOrders(id: string): Promise<Order> {
        try {
            const conn = await DBConnection.connect();
            const sql = 'select * from orders where id=$1 AND active=false';
            const values = [id];
            const result = await conn.query(sql, values);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Cannont get the order ${err}`);
        }
    }
    async deleteById(id: string): Promise<Order> {
        try {
            const conn = await DBConnection.connect();
            const sql = 'delete from orders where id = $1 ';
            const values = [id];
            const result = await conn.query(sql, values);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Cannont dele the User ${err}`);
        }
    }
}
export default new OrderModel();
