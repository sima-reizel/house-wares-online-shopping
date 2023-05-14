const express = require('express');
const router = express.Router();
const controllerProduct = require('../controller/product')

router.get("/", controllerProduct.get);
router.put("/delete/", controllerProduct.getById);
router.post("/", controllerProduct.post);

module.exports = router;