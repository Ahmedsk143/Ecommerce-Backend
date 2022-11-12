import DBConnection from '../database';
import * as dotenv from 'dotenv';

dotenv.config();

export type Product = {
    id: number;
    name: string;
    price: number;
    userId: number;
    category?: string;
};
class UserModel {
    async getAll(): Promise<Product[]> {
        try {
            const conn = await DBConnection.connect();
            const sql = 'select * from products';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`Cannont get the products ${err}`);
        }
    }
    async addNew(product: Product): Promise<Product> {
        try {
            const conn = await DBConnection.connect();
            const sql =
                'insert into products(name, price, user_id, category) values($1, $2, $3, $4)';
            const values = [product.name, product.price, product.userId];
            if (product.category) {
                values.push(product.category);
            } else {
                values.push('uncategorized');
            }
            const result = await conn.query(sql, values);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Cannont add the product ${err}`);
        }
    }
    async getById(id: string): Promise<Product> {
        try {
            const conn = await DBConnection.connect();
            const sql = 'select * from products where id=$1 ';
            const values = [id];
            const result = await conn.query(sql, values);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Cannont get the product ${err}`);
        }
    }
    async deleteById(id: string): Promise<Product> {
        try {
            const conn = await DBConnection.connect();
            const sql = 'delete from products where id = $1 ';
            const values = [id];
            const result = await conn.query(sql, values);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Cannont delete the product ${err}`);
        }
    }
}
export default new UserModel();
