// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Cards = require("../models/cards.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Card (or all cards) then provides JSON
  app.get("/api/:cards?", function(req, res) {
    // If the user provides a specific card in the URL...
    if (req.params.cards) {
      // Then display the JSON for ONLY that card.
      // (Note how we're using the ORM here to run our searches)
      Card.findOne({
        where: {
          routeName: req.params.cards
        }
      }).then(function(result) {
        return res.json(result);
      });
    }
    else {
      // Otherwise...
      // Otherwise display the data for all of the cards.
      // (Note how we're using Sequelize here to run our searches)
      Card.findAll({}).then(function(result) {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new card...
  app.post("/api/new", function(req, res) {
    // Take the request...
    var card = req.body;

    // Create a routeName

    // // Using a RegEx Pattern to remove spaces from card.name
    // // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // var routeName = card.name.replace(/\s+/g, "").toLowerCase();

  });
};
