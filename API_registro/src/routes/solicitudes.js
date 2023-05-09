const express = require('express');
const router = express.Router();

const cursosController = require('../controllers/productosController');

router.get('/productos', cursosController.list);


module.exports = router;