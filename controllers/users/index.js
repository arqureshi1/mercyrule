constrouter = require("express").Router();
const { user } = require('../../models');
// localhost:3001/users
Router.get('/', (req, res) => {
    res.jason("From the user folder!");
})

// I want to write a post request that will create a new user
router.post("sign-up", async (req, res) => {
    //The NONFANCY WAY
    //const notFancyBody = req.body;
    //const userdata= notFancyBody.username;
    // The FANCY way
    const { username:UserInputUsername, email:UserInputEmail, password:UserInputPassword } = req.body; 
    const userData =  await User.create({
        username: UserInputUsername,
        password: UserInputPassword,
        email: UserInputEmail,
    })

    res.jason(userData);
})


module.exports = router;