const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Ordermain = require('./models/orderlist');
const Order2 = require('./models/orderSchema');

const dbURI = 'mongodb://sakib:ozilsanchez@nodemains-shard-00-00.bpl1w.mongodb.net:27017,nodemains-shard-00-01.bpl1w.mongodb.net:27017,nodemains-shard-00-02.bpl1w.mongodb.net:27017/node-mains?ssl=true&replicaSet=atlas-2nrf4v-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
   .then((result) => app.listen(3000))
   .catch((err) => console.log(err));


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


/*
app.get('/', (req, res) => {
  const blogs = new Ordermain({
   // phoneno: '01353935355', mainorder: 'banana', quantity: 3,
    phoneno: '01353935655',
    orderlistz: [{mainorder: 'banana', quantity: 4}]
  });

  blogs.save()
     .then((result) => {
       res.send(result)
     })
     .catch((err) => {
       console.log(err);
     })
 
  //res.render('index', { title: 'Home', orders: blogs });


});
*/

app.get('/create', (req, res) => {
  res.render('create');
  console.log(req.body);
});

/*
app.get('/add-blog', (req, res) =>{
  const ordere = new Order({
    phoneno: '017342424242',
    mainorder: 'banana',
    quantity: 3
  });
  ordere.save()
    .then((result) => {
     res.send(result)
    })
    .catch((err) => {
      console.log(err);
    });
})
*/
/*
app.get('/orders', (req,res) => {
  
  Ordermain.find()
    .then((result) => {
      res.render('index', { title: 'all orderes', orders: result, ggorders: result})
      res.json(result);
     
    })
    .catch((err) => {
      console.log(err);
    })
});
app.post('/orders', (req, res) => {
  const order = new Ordermain({
    
    phoneno: req.body.phoneno,
    
    orderlistz: [{mainorder: req.body.mainorder , quantity:req.body.quantity}]
    
    
    
  });
  




  order.save()
     .then((result) =>{
       res.redirect('/orders');
     })
     .catch((err) => {
      // console.log(err);
     })
})
*/

app.get('/order1', async(req, res) => {
  let foundUser = await Ordermain.find().populate("orderlistz");
  res.json(foundUser);
  
 
});

app.post('/orders', (req, res) => {
  const user = new Ordermain();
   user.phoneno = req.body.phoneno;
  // user.email = req.body.email;
   //user.save()
    //   .then((result) => {
        //    res.json({ message: 'User created!', result });
      //  })
     //   .catch((error) => {
      //    res.status(500).json({ error });
      //  });
    

  const orderlis = new Order2();
  //review.phoneno = req.body.phoneno;
  orderlis.mainorder = req.body.mainorder;
  orderlis.quantity = req.body.quantity;
  orderlis.save()
    //.then((result) => {
     // Ordermain.findOne({ username: review.phoneno }, (err, user) => {
          //if (user) {
              // The below two lines will add the newly saved review's 
              // ObjectID to the the User's reviews array field
              user.orderlistz.push(orderlis);
              user.save()
              .then((result) =>{
                res.redirect('/order1');
              })
              .catch((err) => {
               // console.log(err);
              
         })
                  
             
             // res.json(user);
          
      
      });
    
  

app.use((req, res) => {

  res.render('404');
});

