'use strict';

let testDB = require('../database/tempDB');
let count = 3;

// checks for duplicates in the database
 let inDataBase = (name) => {
  var id = testDB.length + 1;
  var found = testDB.some(function (el) {
    return el.name === name;
  });
  return found
}

let valid = (id) => {
  id = Number(id)
  if (Number(id) <= testDB.length && typeof id === 'number' ){
     return true
  } else {
     return false
  }
}

module.exports = {

  // handles saving the new legislator to the testDB
  saveLegislator: (newLegislator, cb) => {
    let testKeys = ["name", "state" ,"district", "political_party", "term_starts_on","term_ends_on"]
    let newKeys = Object.keys(newLegislator)
    let is_same = testKeys.length == newKeys.length && testKeys.every(function(element, index) {
        return element === newKeys[index];
    });

    if (newKeys.length === 6 && is_same) { // length of object must be 6, expect this each time
      if (inDataBase(newLegislator.name)) {
        return cb('Duplicate Entry', null)
      } else {
          newLegislator.id = count;
          testDB.push(newLegislator);
          count += 1;
          return cb(null, newLegislator);
        }
    } else {
      return cb('No legislator or incomplete provided.', null);
    }
  },

  // gets legislator by id
  getLegislator: (id, cb) => {
    if (testDB.length && valid(id)) {
      let elementPos = testDB.map( leg => { return leg.id }).indexOf(Number(id))
      return cb(null , testDB[elementPos])
    } else {
      return cb('No legislators in the Database or none found.', null)
    }
  }

}
