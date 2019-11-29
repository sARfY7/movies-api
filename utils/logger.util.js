const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.File({
      filename: 'logs/application/errors.log',
      level: 'error',
    }),
    new winston.transports.Console({
      level: 'error',
    }),
  ],
});

module.exports = logger;
