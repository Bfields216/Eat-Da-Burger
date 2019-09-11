//Import orm.js into burger.js
var orm = require("../config/orm.js");
//The code that will call the ORM function using burger specific input for the ORM
var burgers = {

    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb){
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        });
    },

    deleteOne: function(condition, cb){
        orm.delete("burgers", condition, function(res){
            cb(res);
        });
    },
};
// console.log(burger);
module.exports = burgers;