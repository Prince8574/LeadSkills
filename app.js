const { error } = require('console');
const express = require('express');
const app = express();
const port = 3000;

// app.use(function (request, response, next) {
//     console.log("Middlweware");
//     next();
// });
//for using static files
app.use(express.static('./public'));

//for using ejs files
app.set("view engine", "ejs");

//index.ejs file in views
app.get('/', function (req, res) {
    res.render("index");
});
app.get('/login', function (req, res) {
    res.render("login");
});
app.get('/subjects/jee', function (req, res) {
    res.render("jee");
});
app.get('/subjects/gate', function (req, res) {
    res.render("gate");
});
app.get('/subjects/computer_courses', function (req, res) {
    res.render("computer_courses");
});
app.get('/subjects/quiz', function (req, res) {
    res.render("quiz");
});

app.use(function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render('error', {error:err});
});
app.listen(port, () =>
    console.log(`Example app listening on localhost:${port} !`)
);