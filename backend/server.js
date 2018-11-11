const express = require('express');
const orm = require('orm');

const app = express();

const news = {
    id: Number,
    title: String,
    text: String,
    user_id: Number,
    dateTime: Date
}

const users = {
    id: Number,
    login: String
}

app.use(orm.express("mysql://y913929d_mymeans:123456@y913929d.beget.tech/y913929d_mymeans", {
    define: function (db, models, next) {
        models.news = db.define("news", news);
        next();
    }
}));

app.get("/", function (req, res) {

    // let items = [];
    // req.models.news.find({})
    //     .each()
    //     .get( i => items = i )
    //     .save( e => res.send(items) )

    // db.driver.execQuery(
    //     "SELECT user.??, user.?? FROM user WHERE user.?? LIKE ? AND user.?? > ?",
    //     ['id', 'name', 'name', 'john', 'id', 55],
    //     function (err, data) { ... }
    // )

    db.driver.execQuery(
        "SELECT user.??, user.?? FROM user WHERE user.?? LIKE ? AND user.?? > ?",
        ['id', 'name', 'name', 'john', 'id', 55],
        function (err, data) { ... }
    )

    res.send('')

});

app.listen(8000);