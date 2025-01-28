const express = require('express');
const mongoose = require('mongoose');
const app = express();
const encurtarUrls = require('./models/encurtaUrls');

mongoose.connect("mongodb://localhost/encurtarUrls");

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    const urls = await encurtarUrls.find();
    res.render('index', { encurtarUrls: urls });
});

app.post('/encurtarUrls', async (req, res) => {
    await encurtarUrls.create({ full: req.body.fullUrl });
    res.redirect('/');
});

app.listen(process.env.PORT || 3000);
