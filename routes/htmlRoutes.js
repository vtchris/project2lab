var db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  // Load index page
  app.get("/", function(req, res) {
    // if (!req.user) {
    //   res.render("login");
    // }
    db.Event.findAll({}).then(function (data) {
      res.render("index", {
        msg: "Welcome!",
        events: data
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  //module.exports = function(app) {
    // Get all QBs
    app.get("/api/QB", function(req, res) {
      db.QB.findAll({}).then(function(results) {
        console.log(results)
        res.json(results);
      });
    });

  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.get("/register", function(req, res) {
    res.render("register");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
