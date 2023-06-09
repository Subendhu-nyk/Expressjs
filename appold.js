// const express = require('express');
// const app = express();

// const bodyParser=require('body-parser')
// app.use(bodyParser.urlencoded({extended:false}));

// app.use('/add-product',(req, res, next) => {
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size_product"><button type="submit">Add Product</button></form>');
//    });

// app.post('/product',(req, res, next) => {
//     console.log(req.body);    
//     res.redirect('/')
// });

// app.use('/', (req, res, next) => {
//     res.send('<h1>Hello from Express!</h1>');
//   });

// app.listen(3000);

// task 3
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);
