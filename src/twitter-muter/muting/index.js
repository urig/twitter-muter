(function (muting) {
  muting.init = function (twit) {
    muting.twitter = twit
    muting.regexp = new RegExp()
    muting.regexp.compile('^(.+)\\s+(.+)$')
  }

  muting.getMutedUserIds = function () {
    muting.twitter.get('/mutes/users/ids', {}, function (err, data, response) {
      if (err) {
        console.log(err)
      } else {
        console.log(data)
      }
    })
  }

  muting.startListeningToDirectMessages = function () {
    var stream = muting.twitter.stream('user')
    stream.on('direct_message', function (directMessage) {
      muting.processDirectMessage(directMessage.direct_message.text)
    })
  }

  muting.processDirectMessage = function (directMessage) {
    console.log(directMessage)
    var results = muting.regexp.exec(directMessage)
    // if (results.length <= 3) return false
    var userToMute = results[1]
    var durationToMute = results[2]
    return [userToMute, durationToMute]
  }

/*
twitter.get('/mutes/users / ids.json', { }, function (err, data, response) {
    console.log(data)

twitter.getCustomApiCall('/mutes/users/ids.json', { }, error, success)
*/
})(module.exports)
