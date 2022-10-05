const { StatusCodes, getReasonPhrase } = require('http-status-codes');

const httpCodes = {
  OK: StatusCodes.OK,
  NOT_FOUND: StatusCodes.NOT_FOUND,
};

const getResponse = (req, res, statusCode, content, message = 'Successfully') => {
  console.log('content', content);
  statusCode = (content === Object.keys.length) === 0 || content.length === 0 ? httpCodes.NOT_FOUND : statusCode;
  res.json({
    statusCode,
    result: getReasonPhrase(statusCode),
    message,
    content,
  });
};

module.exports = { httpCodes, getResponse };
