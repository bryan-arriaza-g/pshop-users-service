const { connectDB } = require('./config/db');
const { appRoutes } = require('./routes');
const { appUtils } = require('./app.utils');
const { start } = require('./server');

// Set app
const app = appUtils();

// Functions
connectDB('users.json');

// Routes
appRoutes(app);

// Server
start(app);
