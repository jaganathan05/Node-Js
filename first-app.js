
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended : false} ));
app.use('/add-product', (req,res,next)=>{
    console.log('in the middleware');
    res.send('<form action="/product" method="POST" ><lable>product</lable><input type="text"  name="title"><br><br><lable>size</lable><input type="number" name="size" min="1" max="10"><button type="submit">add product</button> </form>')
})
app.post('/product',(req,res, next) =>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    res.send('<h1>welcome to express.js</h1>')
})

app.listen(3000);

