const express = require('express');
const logger =require('../middlewares/logger')
const authorizer = require('../middlewares/authorizer')
const productsRoutes = require('./products/products.routes')
const usersRoutes =require('./users/users.routes')

const router = express.Router();
router.use(logger,authorizer)
router.use('/products',productsRoutes)
router.use('/users',usersRoutes)


module.exports = router
