
-- USE UUID IN PGSQL WITH COMMAND BELOW 

CREATE EXTENSION "uuid-ossp";

-- WITH THE CODE BELOW A TABLE IN DATABSE WILL BE CREATED

CREATE TABLE Employee(
employee_id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
employee_name VARCHAR(255) NOT NULL,
employee_salary NUMERIC(10,2) NOT NULL,
employee_registration INTEGER NOT NULL,
employee_jobrole VARCHAR(255) NOT NULL
);



