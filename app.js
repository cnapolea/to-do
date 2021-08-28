//jshint esversion:10

require('dotenv').config();
const express = require('express'),
    path = require('path'),
    hbs = require('hbs'),
    mongoose = require('mongoose');


const Task = require('./models/tasks');
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
        Task.find({})
            .then(tasks => {
                res.render('home', {tasks});
            })
            .catch(err => {
                next(err);
            });
    })
    .post('/add-task', (req, res, next) => {
        const task = req.body.task;
        
        task.create({task})
            .then(()=> {
                res.redirect('/');
            })
            .catch(err => {
                next(err);
            });
    });

app.use((err, req, res, next) => {
    res.render('error');
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