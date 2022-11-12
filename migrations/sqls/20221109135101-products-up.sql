CREATE TABLE products(
    id serial primary key,
    name varchar(100) not null,
    price integer not null,
    category varchar(90),
    user_id integer not null,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE 
)