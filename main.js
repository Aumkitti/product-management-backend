const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const productsRoutes = require('./routes/Product');
app.use('/api/products', productsRoutes);

app.use(bodyParser.json());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(productsRoutes)
app.get("/", (req,res)=>{
    res.send("<h1>Management Product</h1>");
})

app.listen(PORT, ()=>{
  console.log("Server is running on http://localhost:"+PORT)
})

