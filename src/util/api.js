const { v4: uuidv4 } = require('uuid');
const { StatusCodes, getReasonPhrase } = require('http-status-codes');

const httpCodes = {
  OK: StatusCodes.OK,
  NOT_FOUND: StatusCodes.NOT_FOUND,
};

const getResponse = (req, res, statusCode, content, message = '') => {
  statusCode = Object.keys(content).length === 0 || content.length === 0 ? httpCodes.NOT_FOUND : statusCode;
  res.json({
    statusCode,
    result: getReasonPhrase(statusCode),
    message: `Successfully ${message}!`,
    content,
  });
};

const getID = () => new Date().getTime().toString();

const getUUID = () => uuidv4();

module.exports = { httpCodes, getID, getUUID, getResponse };
