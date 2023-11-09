// app.js (หรือไฟล์หลักของ Express)
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/Product');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/product', productRoutes);


app.get("/", (req, res) => {
  res.send("<h1>Product Management</h1>");
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
