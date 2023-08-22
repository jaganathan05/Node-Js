const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const controoler404 = require('./controllers/404');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop'); 
const contactRoutes = require('./routes/contact');
const successRoutes = require('./routes/success');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);

app.use(controoler404.get404page);

app.listen(3000);
