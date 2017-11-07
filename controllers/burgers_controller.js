var express = require("express");
var burger = require("../models/burger.js")
var router = express.Router();

router.get("/index", function (req, res) {
    console.log("This is the CONTROLLER");
    burger.selectAll( function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    }); 
    // res.send("hola");
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(
        [ "burger_name"],
        [req.body.burger_name], function (result) {
            res.json({id: result.insertId});   
        }); 
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    
      console.log("condition", condition);

      burger.update({
          devoured: req.body.devoured
      }, condition, function (result) {
          if(result.changedRows == 0){
            return res.status(404).end();
          } else{
              res.status(200).end();
          }
          
      });
    
});
module.exports = router;