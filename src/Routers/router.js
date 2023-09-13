const router = require("express-promise-router")();
const employeeController = require("../Controllers/employeeController");

// router responsible for create user
router.post("/employee", employeeController.createEmployee);

router.get("/employee", (req, res) => {
  res.send("teste router :))");
});
module.exports = router;
