const events = require('events'),
  request = require('request'),
  querystring = require('querystring');

class Helper extends events {
  constructor() {
    super();
  }

  getTestDataWithUrl() {
    let self = this;
    let requestUrl = '';
    let urlBody = {};
    let response_object = {};

    request(
      {
        headers: {
          header_key_here: 'header_value_here'
        },
        url: requestUrl,
        method: 'POST',
        json: urlBody
      },
      function(err, res, body) {
        //it works!
        if (err) {
          self.emit('error', 'custom_return_data');
        } else {
        }
        self.emit('success', 'custom_return_data');
      }
    );
  }

  getTestDataWithoutUrl() {
    let self = this;
    let response_object = {};
    self.emit('success', response_object);
  }
}

module.exports = Helper;
