\c perntodo;

DROP TABLE IF EXISTS todo;

CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(250) NOT NULL,
    complete BOOLEAN DEFAULT false,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_completed TIMESTAMP
);