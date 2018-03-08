'use strict';

const express = require('express');
const router = express.Router();
const events = require('events');
const request = require('request');
const Helper = require('../helpers/helper');
const middleware = require('../middleware/access');
router.post('/webhooks', (req, res) => {
  res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type

  //   let response = null;
  //   response = await middleware.handleIntent(request, response);

  middleware.handleIntent(request, response, (err, result) => {
    if (err) {
      res.status(400);
      res.json({ status: 400, message: err });
    } else {
      res.status(200);
      res.json({ status: 200, message: 'success', Data: result });
    }
  });
  //   processRequest();

  function getActionName() {
    return req.body.result.action;
  }

  function processRequest() {
    let helper = new Helper();
    let actionName = getActionName();
    switch (actionName) {
      case 'test_case_1':
        helper.getTestDataWithoutUrl();
        break;

      case 'test_case_2':
        helper.getTestDataWithUrl();
        break;

      default:
        'default';
    }
  }
});

module.exports = router;
