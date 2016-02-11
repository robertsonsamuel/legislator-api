'use strict';

const express    = require('express');
const Legislator = require('../models/Legislator');
let router = express.Router();

router.get('/:id', (req, res) => {
  Legislator.getLegislator(req.params.id, (err, legislator) => {
    res.status(err ? 400:200).send(err || legislator);
  });
});

router.post('/', (req, res) => {
  Legislator.saveLegislator(req.body, (err, savedLegislator) => {
      res.status(err ? 400:200).send(err || savedLegislator);
  });
});




module.exports = router;
