const User = require('./user');
const Stroke = Require("./stroke");

User.hasMany(stroke,{
    forigenKey: "user_id"
});

stroke.belongsTo(user, {
    forigenKey: 'user_id'
});

module.exports = { user, stroke }