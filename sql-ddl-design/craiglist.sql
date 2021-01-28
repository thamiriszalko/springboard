CREATE TABLE locations
(
    id SERIAL PRIMARY KEY,
    country TEXT NOT NULL,
    city TEXT NOT NULL,
    neighborhood TEXT,
    zip_code INTEGER NOT NULL,
);

CREATE TABLE regions
(
    id SERIAL PRIMARY KEY,
    country TEXT NOT NULL,
    city TEXT NOT NULL,
    neighborhood TEXT,
);

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    username VARCHAR(15) NOT NULL,
    email TEXT NOT NULL,
    location_id INTEGER REFERENCES locations ON DELETE NULL,
    region_id INTEGER REFERENCES regions ON DELETE NULL
);

CREATE TABLE categories
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
);

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    text TEXT NOT NULL,
    user_id INTEGER REFERENCES user ON DELETE SET NULL,
    region_id INTEGER REFERENCES regions ON DELETE SET NULL,
    category_id INTEGER REFERENCES categories ON DELETE SET NULL,
);

