const express = require('express');
const controllers = requires('./routes');
const sequelize = require('./config/connection');
const Port = 3001;
const app = express();

app.use(controllers );

//connect to database then run server
sequelize.sync({force: true}).then(() => {
    app.listen(Port, ()=> {
    console.log("dad will come back soon")
    })
})
