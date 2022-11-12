CREATE TABLE orders(
id serial primary key,
product_id integer not null,
quantity integer default 1,
user_id integer not null,
active boolean,
FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE 
)