var nconf = require('nconf')
var Twit = require('twit')

var muting = require('./muting')

// Configuration
nconf.env()
  .file({ file: 'config.json' })

var twitter = new Twit({
  consumer_key: nconf.get('consumer_key'),
  consumer_secret: nconf.get('consumer_secret'),
  access_token: nconf.get('access_token'),
  access_token_secret: nconf.get('access_token_secret'),
})

muting.init(twitter)

muting.getMutedUserIds()

muting.startListeningToDirectMessages()

/*
var stream = twitter.stream('user')
stream.on('direct_message', function (directMsg) {
    console.log(directMsg.direct_message.text)
})
*/

/*
var twitter = require('ntwitter')

var twit = new twitter({
    consumer_key: '3yKUz5V9sS7BYqbkXggMUqbL3',
    consumer_secret: 'U2m0QqRdwujutQGHZnYOTsVQmiEuKNTXleVIEnQHmdX4YAogXA',
    access_token_key: '14134427-sKuVawNCvZ950rPGIegyHWPwsSVkGLfmC8xUwmjX8',
    access_token_secret: 'DtMeLESk9HeHmPDecakrRnD0FGQtj2CnN8I1gsCZJx9zM'
})

twit
    .verifyCredentials(
    function (err, data) {
        console.log(data)
    })
//.updateStatus('Test tweet from ntwitter/' + twitter.VERSION,
//    function (err, data) {
//        console.log(data)
//    })

twit.stream('user', { }, function (stream) {
    stream.on('data', function (data) {
        console.log(data)
    })
    stream.on('end', function (response) {
    // Handle a disconnection
    })
    stream.on('destroy', function (response) {
    // Handle a 'silent' disconnection from Twitter, no end/error event fired
    })
    // Disconnect stream after five seconds
    setTimeout(stream.destroy, 30000)
})
*/
/*
//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', err)
}
var success = function (data) {
    console.log('Data [%s]', data)
}

var Twitter = require('twitter-js-client').Twitter

//Get this data from your twitter apps dashboard
var config = {
    "consumerKey": "3yKUz5V9sS7BYqbkXggMUqbL3",
    "consumerSecret": "U2m0QqRdwujutQGHZnYOTsVQmiEuKNTXleVIEnQHmdX4YAogXA",
    "accessToken": "14134427-8OsD03dOnRX7NIcTsICnlZCDybxCtlumzhicUkoeb", // Should come from the end user?
    "accessTokenSecret": "WtF4seDS2KbJ7vFIMTW9JMkQnIwpUCN7kpzJtcWQ4TItJ", // Should come from the end user?
    "callBackUrl": "http://twitter.com/"
}

var twitter = new Twitter(config)
//<blockquote class="twitter-tweet" lang="en"><p>I&#39;m going to &quot;The Committers Are Back&quot;. See you there? 
//<a href="http://t.co/kEokLu26K2">http://t.co/kEokLu26K2</a> via <a href="https://twitter.com/eventbrite">@Eventbrite</a></p>
//&mdash; Uri Goldstein (@urig) <a href="https://twitter.com/urig/status/588290055661293568">April 15, 2015</a></blockquote> 
//<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
//twitter.getTweet({ id: '588290055661293568' }, error, success)
//twitter.getCustomApiCall('/statuses/lookup.json', { id: '588290055661293568' }, error, success)
twitter.getCustomApiCall('/mutes/users/ids.json', {}, error, success)
twitter.getCustomApiCall('/mutes/users/ids.json', {}, error, success);*/
