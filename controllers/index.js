const routes = require('express').Router();
const users = require('./users');
const pages = require('./pages')
// localhost:3001/pages
router.use('/', pages)
// localhost:3001/users
router.use("/users", users);


module.exports = router;
