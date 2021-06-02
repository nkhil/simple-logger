const pino = require('pino');
const noir = require('pino-noir');

const { redactionKeys } = require('./redaction/redaction-keys');

const serializers = { err: pino.stdSerializers.err };

module.exports = pino({
  level: process.env.LOG_LEVEL || 'info',
  serializers: noir(serializers, redactionKeys),
})
