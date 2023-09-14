const router = require("express-promise-router")();
const employeeController = require("../Controllers/employeeController");

// router responsible for create employee
router.post("/employee", employeeController.createEmployee);

// router responsible for list all employees
router.get("/employee", employeeController.listAllEmployees);

module.exports = router;
