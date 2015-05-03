(function (muting) {
  var regexp;
  
  muting.init = function (twit) {
    muting.twitter = twit
    regexp = new RegExp()
    regexp.compile('^(.+)\\s+(.+)$')
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
    var results = regexp.exec(directMessage)
    // if (results.length <= 3) return false
    var userToMute = results[1]
    var durationToMute = results[2]
    return [userToMute, durationToMute]
  }
  
})(module.exports)
