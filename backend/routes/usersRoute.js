const router = require("express").Router();
const { createUsers, getUsers, updateUsers, deleteUsers, getUsersid} = require("../controller/user");


router.get("/users", getUsers);
router.get("/users/:id", getUsersid);
router.post("/addusers", createUsers);
router.patch("/addusers/:id", updateUsers);
router.delete("/deleteusers/:id", deleteUsers);

module.exports = router;
