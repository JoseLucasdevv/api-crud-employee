const router = require("express-promise-router")();
const employeeController = require("../Controllers/employeeController");

// router responsible for create employee
router.post("/employee", employeeController.createEmployee);

// router responsible for list all employees
router.get("/employee", employeeController.listAllEmployees);

// router responsible for list employee by ID

router.get("/employee/:id", employeeController.listEmployeeById);

module.exports = router;
