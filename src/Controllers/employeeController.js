//  # File responsible for Request and Response *Controllers* API

const db = require("../config/db");

// method responsible for create new employee

exports.createEmployee = async (req, res) => {
  try {
    const {
      employee_name,
      employee_salary,
      employee_registration,
      employee_jobrole,
    } = req.body;
    const { rows } = await db.query(
      "INSERT INTO employee(employee_name,employee_salary,employee_registration,employee_jobrole) VALUES($1,$2,$3,$4)",
      [employee_name, employee_salary, employee_registration, employee_jobrole]
    );
    res.status(201).send({
      test: rows,
      message: "great, create a new employee !",
      body: {
        employee_name,
        employee_salary,
        employee_registration,
        employee_jobrole,
      },
    });
  } catch (error) {
    console.error("Create Employee", error);
    res.status(500).send({
      message: "error in create new employee",
    });
  }
};

// method reponsible for list all employees
exports.listAllEmployees = async (req, res) => {
  try {
    const { rows } = await db.query(
      "SELECT * FROM employee ORDER BY employee_name asc"
    );

    res.status(200).send(rows);
  } catch (error) {
    console.error("listAllEmployees", error);
    res.status(500).send({
      message: "error in list All Employees",
    });
  }
};

// method responsible for list employee By ID
exports.listEmployeeById = async (req, res) => {
  const { id } = req.params;

  try {
    const { rows } = await db.query(
      "SELECT * FROM employee WHERE employee_id = $1",
      [id]
    );
    res.status(200).send(rows);
  } catch (error) {
    console.error("listEmployeeById", error);
    res.status(500).send({
      message: "error in listEmployeeById",
    });
  }
};

// method responsible for update Employee By ID

exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  const {
    employee_name,
    employee_salary,
    employee_registration,
    employee_jobrole,
  } = req.body;
  try {
    const { rows } = await db.query(
      "UPDATE employee SET employee_name = $1,employee_salary = $2 , employee_registration = $3,employee_jobrole = $4 WHERE employee_id = $5 ",
      [
        employee_name,
        employee_salary,
        employee_registration,
        employee_jobrole,
        id,
      ]
    );
    res.status(200).send({
      message: "Employee Update sucess",
      res: rows,
    });
  } catch (error) {
    console.error("updateEmployee", error);
    res.status(500).send({
      message: "fail Update Employee",
    });
  }
};
