//jshint esversion:10

require('dotenv').config();
const express = require('express'),
    path = require('path'),
    hbs = require('hbs'),
    mongoose = require('mongoose'),
    nodeSassMiddleware = require('node-sass-middleware'),
    serveFavicon = require('serve-favicon'),
    morgan= require('morgan');


const Task = require('./models/tasks');
const app = express();

hbs.registerPartials(path.join(__dirname, 'views/partials'));

app
    .set('view engine', 'hbs')
    .set('views', path.join(__dirname, 'views'))
    .use(express.urlencoded({
        extended: true
    }))
    .use(nodeSassMiddleware({
        dest: path.join(__dirname,'public/stylesheets'),
        src: path.join(__dirname,'styles'),
        force: true,
        outputStyle: 'expanded',
        prefix:'/stylesheets'
    }))
    .use(express.static(path.join(__dirname, 'public')))
    .use(serveFavicon(path.join(__dirname, 'public/favicon.ico')))
    .use(morgan('dev'));

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
        
        Task.create({task})
            .then(()=> {
                res.redirect('/');
            })
            .catch(err => {
                next(err);
            });
    })
    .post('/delete-task/:id', (req, res, next) => {
        Task.findByIdAndDelete(req.params.id)
            .then(() => {
                res.redirect('/');
            })
            .catch(err => {
                next(err);
            });
    })
    .post('/edit-task/:id', (req, res, next) => {
        Task.findByIdAndUpdate(req.params.id, {task: req.body.updatedTask})
        .then((data) => {
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