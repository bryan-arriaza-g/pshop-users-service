const { StatusCodes, getReasonPhrase } = require('http-status-codes');
const UserRoutes = require('./modules/users/user.routes');

const CONTEXT_PATH = '/api/v1';

const healthCheck = (req, res) => {
  res.json({
    statusCode: StatusCodes.OK,
    reason: getReasonPhrase(StatusCodes.OK),
    message: '[Users] is running...',
  });
};

const appRoutes = app => {
  app.get('/health', healthCheck);
  app.use(`${CONTEXT_PATH}/users`, UserRoutes);
};

module.exports = { appRoutes };
