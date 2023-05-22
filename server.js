const express = require('express');
const controllers = requires('./routes');
const sequelize = require('./config/connection');
const exphbs = require ('express-handlebars');
// wen need this to deploy to the nearest port number in the server
const Port = process.env.Port || 3001;
const app = express();

app.use(express.static('public'));

// all needed to use handlebars
const hbs = exhbs.create({});

app.engine('handlebars', hbs.engine);
app.set("view engine", "handlebars");

// This is for post requests!
app.use(express.json());
app.use(express.unlencodes( { extended: true }));
// const models = require(""./models");
app.use(controllers );

//connect to database then run server
sequelize.sync({force: true}).then(() => {
    app.listen(Port, ()=> {
    console.log("dad will come back soon")
    })
})
