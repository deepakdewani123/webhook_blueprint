'use strict';

const express = require('express');
const router = express.Router();
const events = require('events');
const request = require('request');
const middleware = require('../middleware/access');

router.post('/webhook', (req, res) => {
  res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type

  middleware.handleIntent(req, res, (err, result) => {
    if (err) {
      res.status(400);
      res.json({ status: 400, message: err });
    } else {
      res.status(200);
      res.json({ status: 200, message: 'success', Data: result });
    }
  });
});

module.exports = router;
