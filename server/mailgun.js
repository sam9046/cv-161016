// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
var auth = {
    api_key: 'key-13a24549e3b388d51601538bba48b1c4',
    domain: 'mail.samcackett.com'
};
var mailgunjs = require('mailgun-js')({apiKey: auth.api_key, domain: auth.domain});

var mailgun = function() {};

mailgun.prototype.sendMail = function sendMail(emailBody, cb) {
    var jsonEmailBody = JSON.parse(emailBody);
    var msg = {
        from: "sam@website",
        to: 'samcackett@gmail.com.com', // An array if you have multiple recipients.
        subject: jsonEmailBody.subject,
        //You can use "text:" to send plain-text content. It's oldschool!
        text: jsonEmailBody.name + jsonEmailBody.email + jsonEmailBody.message
    };

    mailgunjs.messages().send(msg, function (err, body) {
        if (err) {
            console.log('Error: ' + err);
            var error = new Error("Mailgun Error");
            cb(error, null);
        }
        else {
            console.log('Response: ' + body);
            cb(null, body);
        }
    });
};
module.exports = mailgun;