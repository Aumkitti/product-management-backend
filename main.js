// app.js (หรือไฟล์หลักของ Express)
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/Product');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const cookieSession = require("cookie-session");
const db = require("./model");
const Role = db.role;
const session = require('express-session');
const finalhandler = require('finalhandler');


mongoose.Promise = global.Promise;

require ('dotenv').config()
const url = process.env.MONGODB_URL;

mongoose.connect(url, {
  dbName: 'test',
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Successfully connect");
  initial();
})

.catch((error) => {
  console.log("Connection error", error)
  process.exit(); 
})

function initial() {
  Role.estimatedDocumentCount()
      .then(count => {
          console.log("Count of roles in the collection: " + count);
          if (count === 0) {
              const rolesToCreate = [
                  { name: "user" },
                  { name: "moderator" },
                  { name: "admin" }
              ];

              return Promise.all(rolesToCreate.map(roleData => {
                  return new Role(roleData).save();
              }));
          }
      })
      .then(results => {
          if (results) {
              results.forEach(result => {
                  console.log(`Added '${result.name}' to roles collection`);
              });
          }
      })
      .catch(err => {
          console.error("Error initializing roles", err);
      });
}

app.use(session({
  secret: 'Kittipong-secret-kye',
  resave: false,
  saveUninitialized: true,
}));


app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/api/product', productRoutes);
require('./routes/auth.router')(app);

app.post('/api/auth/signin', (req, res) => {
  // Handle the signin logic here
  res.status(200).json({ message: 'Signin successful' });
});
app.get("/", (req, res) => {
  res.send("<h1>Product Management</h1>");
});

app.use((req, res) => {
  // Handle the request or call finalhandler
  const done = finalhandler(req, res);
  done();
});

app.use(cookieSession({name: "niti-session",keys: ["COOKIE_SECRET"], }));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
