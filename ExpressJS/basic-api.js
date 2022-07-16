const express = require("express");

const app = express();

app.get("", (req, resp) => {
    console.log(req.query.name);
    if (req.query.name == "Huzefa") {
        resp.send("Hello Huzefa !!");
    } else {
        resp.send("Hello " + req.query.name + " !!");
    }
});

app.get("/about", (req, resp) => {
    resp.send("ABOUT !!");
});

app.get("/help", (req, resp) => {
    resp.send("HELP !!");
});

app.listen(5000);