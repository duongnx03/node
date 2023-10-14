var express = require("express");
var app = express();
var port = 3000; // error thi doi port
var expressLayouts = require("express-ejs-layouts");//goi thu vien layout

app.use(express.static("public"));//duong dan den thu muc public
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(expressLayouts);//chay trang co ten layout

app.set("view engine", "ejs"); //duoi mo rong ejs
app.set("views", "./views"); //thu muc view
app.listen(port);

app.get("/", function(req, res){
    res.render("trangchu");
});


app.get("/gioithieu", function(req, res){
    res.render("gioithieu");
});