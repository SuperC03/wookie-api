var rp = require('request-promise');

var options = {
    method: 'POST',
    uri: 'https://www.wookietranslator.com/translate',
    body: {
        "english": "hey",
    },
    json: true
};
 
rp(options)
    .then(function (res) {
        console.log(res);
    })
    .catch(function (err) {
        console.warn(err);
    });