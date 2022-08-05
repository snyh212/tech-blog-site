# tech-blog-site
<img src="images\Screenshot 2022-08-05 033921.png">

## Description
Tech-blog-site is a complete front and back-end for a blog post website, that gives the user to sign up, login and logout of accounts and create, read, comment on and delete posts. Once the database is made and seeds are seeded, the user can view with get routes, add with post routes, update with put routes and delete with delete routes.

## Technologies used
HTML, CSS, JS, node.js with bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mysql2 and sequelize dependencies.
Made on VS Code, and run in command line Insomnia and deployed on heroku

## Code and Functionality

### Server settup with sequelize:
```
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

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});

const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize
```

## Contact Infromation

[E-mail: Snyh121@gmail.com](mailto:snyh121@gmail.com)  
[GitHub: snyh212](https://github.com/snyh212)  
[LinkdIn: Shmuel-Hoffman](https://www.linkedin.com/in/shmuel-hoffman-254b0223b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BS2rg0PtBTLeG2szT2ZbGmg%3D%3D)