'use strict';

let testDB    = require('../database/tempDB'),
    validator = require('../validators/validator')
let count = 3;


module.exports = {

  // handles saving the new legislator to the testDB
  saveLegislator: (newLegislator, cb) => {

    if (validator.checkData(newLegislator)) { // length of object must be 6, expect this each time
      if (validator.inDataBase(newLegislator.name)) {
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
    if (testDB.length && validator.validId(id)) {
      let elementPos = testDB.map( leg => { return leg.id }).indexOf(Number(id))
      return cb(null , testDB[elementPos])
    } else {
      return cb('No legislators in the Database or none found.', null)
    }
  }

}
