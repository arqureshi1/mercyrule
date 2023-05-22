const router = require('espress').Router();
const { User } = require("../../models");
//localhost;3001
router.get('/', async (req, res)=> {
    const userData = await User.findall({
        attributes: [
            'username'
        ]
    });
    console.log("not good looking data", userData)

    constprettyUserData = userData.map((user) => user.get({plain: true}));
    res.render('homepage');
})


router.get('/dashboard/:user_id', async (req, res) => {
    const userData = await User.findByPk(req.prams.user_id, {
        attributes: [
            'username',
            'email'
        ]
    });
    console.log("sequelize object is not appealing!", userData);

    const actualUserData = userData.get({ plain: true });
    console.log("looks alot better", actualUserData);
    res.render('dashboard', actualUserData);
});

module.exports = router;