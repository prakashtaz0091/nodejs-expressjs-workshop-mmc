require('module-alias/register');
const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "src/views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use('/', routes);



const port = 3000;
app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
})