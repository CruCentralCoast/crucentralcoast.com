const subdomain = require('express-subdomain');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('.hbs', exphbs({ defaultLayout: 'default', extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(express.static(__dirname + '/public'));
app.use(subdomain('slo', require('./controllers/slo')));
app.use(require('./controllers'));

app.listen(process.env.PORT);