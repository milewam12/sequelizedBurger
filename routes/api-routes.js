var db = require("../models")
var express = require("express");
var router = express.Router();


// Get all burgers from the db
router.get('/index', function (req, res) {

  db.burger.findAll({}).then(function(data){

    var hbsObject = { burgers: data };
    // console.log(data);
    res.render('index', hbsObject);

  })

});


// Create a new burger

router.post('/burger/create', function (req, res) {

      db.burger.create(
        {
          burger_name: req.body.burger_name,
          devoured: false
        }
      ).then(function(){
        res.redirect('/index');
      });
    
    });

    // Devour a burger

    router.post('/burger/eat/:id', function (req, res) {
        models.devoured.create({
            devour_name: req.body.devour_name,
            burgerId: req.params.id

        }).then(function (eatenB) {
            eatenB.update({
                devoured: true
            }).then(function () {
                res.redirect('/index');
                
            })
            
        });
        
    });

module.exports = router;