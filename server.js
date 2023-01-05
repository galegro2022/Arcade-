const path = require('path');
const express = require('express');
// Import express-session
const session = require("express-session");
const exphbs = require('express-handlebars');
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');

// Import models to sync with the database
const models = require('./models');


const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use(express.static(path.join(__dirname, 'public')));
// //app.use(require('./controllers/routes'));

// turn on routes
app.use(routes);


// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => 
    console.log("Server now listening on http://localhost:" + PORT)
    );
  });
  