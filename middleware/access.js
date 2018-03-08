const Helper = require('../helper/helper');

const handleIntent = (req, res, callback) => {
  let helper = new Helper();

  helper.on('error', err => {
    callback(err, null);
  });

  helper.on('success', result => {
    callback(null, result);
  });

  let actionName = getIntentName(req);
  switch (actionName) {
    case 'email_widget':
      helper.getTestDataWithoutUrl();
      break;

    case 'news_widget':
      helper.getTestDataWithUrl();
      break;

    default:
      'default';
  }
};

function getIntentName(req) {
  return req.body.result.metadata.intentName;
}

module.exports = {
  handleIntent
};
