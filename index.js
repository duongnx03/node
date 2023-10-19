var express = require("express");
var app = express();
var port = 3000; // error thi doi port
var expressLayouts = require("express-ejs-layouts");//goi thu vien layout
var nodemailer = require("nodemailer");
var IP = require('ip');

app.use(express.static("public"));//duong dan den thu muc public
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);//chay trang co ten layout

app.set("view engine", "ejs"); //duoi mo rong ejs
app.set("views", "./views"); //thu muc view
app.listen(port);

app.get('/', function(req, res){
 
});

//duong dan trang chu
app.get("/", function (req, res) {
    res.render("trangchu");
});

//duong dan trang gioi thieu
app.get("/gioithieu", function (req, res) {
    res.render("gioithieu");
});

app.get("/email", function (req, res) {
    res.render("partials/email");
});

app.post("/post-email", function (req, res) {
    console.log(req.body.emailA);
    console.log(req.body.emailB);
    console.log(req.body.subject);
    console.log(req.body.noidung);

    //cai dat email
    var option = {
        service: 'gmail',//dung email
        auth: {
            user: 'duongnx170803@gmail.com',
            pass: 'gdwr sihd qmfs shji',
        }
    };

    var transporter = nodemailer.createTransport(option);
    transporter.verify(function (error, success) {
        if (error) {
            console.log("error");
        } else {
            console.log("connect successfully!");
        }
    });

    var mail = {
        from: req.body.emailA,
        to: req.body.emailB,
        subject: req.body.subject,
        html: req.body.noidung,
    };

    transporter.sendMail(mail, function (error, info) {
        if (error) {
            console.log("error");
        } else {
            console.log("Email send: " + info.response);
        };
    });

    res.redirect("/email");
});

