const express = require('express');
const router = express.Router();
const controllerUser = require('../controller/user')

router.get("/:id", controllerUser.getById);
router.post("/", controllerUser.login);
router.post("/add", controllerUser.addnewUser);

module.exports = router;