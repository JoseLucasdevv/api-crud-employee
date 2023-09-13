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
    const { rows } = db.query(
      "INSERT INTO employee(employee_name,employee_salary,employee_registration,employee_jobrole) VALUES($1,$2,$3,$4)",
      [employee_name, employee_salary, employee_registration, employee_jobrole]
    );
    res.status(201).send({
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
    res.status(500).res.send({
      message: "error in create new employee",
    });
  }
};
