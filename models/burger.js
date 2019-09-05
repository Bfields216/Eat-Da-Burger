//Import orm.js into burger.js
var orm = require("../config/orm.js");
//The code that will call the ORM function using burger specific input for the ORM
var burger = {

    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb){
        orm.updateOne("burger", objColVals, condition, function(res){
            cb(res);
        });
    },

    deleteOne: function(condition, cb){
        orm.deleteOne("burger", condition, function(res){
            cb(res);
        });
    },
};

module.exports = burger;