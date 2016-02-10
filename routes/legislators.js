'use strict';

const express = require('express');

let tempDataBase = [];
let router = express.Router();
let legislators = [];
let count = 1;
router.post('/', (req, res) => {
  saveLegislator(req.body, (err, savedLegislator) => {
      res.status(err ? 400:200).send(err || savedLegislator);
  });
});


let saveLegislator = (newLegislator, cb) => {
  if (newLegislator){
    newLegislator.id = count;
    legislators.push(newLegislator);
    count += 1;
    return cb(null, newLegislator);
  }else {
    return cb('No Legislator Provided.', null);
  }
}

module.exports = router;
