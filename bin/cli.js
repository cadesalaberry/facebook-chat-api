var login = require('./index');

login('config.json', function (err, api) {
    'use strict';

    if (err) {
        return console.error(err);
    }

    api.listen(function (err, message, stopListening) {
        if (err) {
            return console.error(err);
        }

        if (message.body === '/stop') {
            api.sendMessage("Goodbye...", message.thread_id);
            return stopListening();
        }

        this.debug(message);
    });
});