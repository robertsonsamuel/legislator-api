'use strict';
let testDB    = require('../database/tempDB');

module.exports = {
  // checks for duplicates in the database
   inDataBase : name => {
    var id = testDB.length + 1;
    var found = testDB.some(function (el) {
      return el.name === name;
    });
    return found
  },

  // checks for valid id in req.params.id
   validId : id => {
    id = Number(id)
    if (Number(id) <= testDB.length && typeof id === 'number' ){
       return true
    } else {
       return false
    }
  },

  // checks for data, six keys and keys are correct name
   checkData : newLegislator => {
    let testKeys = ["name", "state", "district", "political_party", "term_starts_on", "term_ends_on"]
    let newKeys = Object.keys(newLegislator)
    let is_same = testKeys.length == newKeys.length && testKeys.every(function(element, index) {
      return element === newKeys[index];
    });

    if (newKeys.length === 6 && is_same) {
      return true
    } else {
      return false
    }
  }

}
