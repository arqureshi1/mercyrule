const routes = require('express').Router();

// localhost:3001/
Router.get('/', (req, res) => {
    res.json("HI!");
})


module.exports = router;
