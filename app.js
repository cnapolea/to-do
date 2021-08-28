//jshint esversion:10

require('dotenv').config();
const express = require('express'),
    path = require('path'),
    hbs = require('hbs'),
    mongoose = require('mongoose');

const app = express();

hbs.registerPartials(path.join(__dirname, 'views/partials'));

app
    .use(express.urlencoded({
        extended: true
    }))
    .use(express.static(path.join(__dirname, 'public')))
    .set('view engine', 'hbs')
    .set('views', path.join(__dirname, 'views'));

app
    .get('/', (req, res, next) => {
        res.render('home');
    })
    .post('/', (req, res, next) => {
        res.render('home');
    });


mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Running on port ${process.env.PORT}`);
        });
    })
    .catch(err => {
        throw new Error(err.message);
    });