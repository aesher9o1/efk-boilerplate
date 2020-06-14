const logger = require('fluent-logger');

logger.configure('fluentd');


logger.emit('debug', {
    message: 'This is a message'
});

console.log("thread relase")