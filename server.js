//requires
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

//app port
const app = express();
const PORT = process.env.PORT || 3001;

//sequelize connection ?cookies?
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'youllneverknow',
  cookie: {},
  resave: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};

app.use(session(sess));

//express use sess,json,url,static
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

//handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//sequelize listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});