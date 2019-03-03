const PlaySoundService = require('../services/PlaySoundService')

module.exports.handle = (req, res) => {
  const body = req.body

  if (!body || !body.text) {
    return PlaySoundService.play()
    .then(() => res.status(200).send({message: 'success'}))
  }
  const youtubeUrlRegex = new RegExp(/^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/)

  if (body.text && youtubeUrlRegex.test(body.text)) {
    const slackResponse = {
      attachments: [{ color: '#36a64f', title: `Now Playing ${body.text}` }]
    }
    return PlaySoundService.playFromUrl(body.text)
    .then(() => res.status(200).send(slackResponse))
    .catch(e => Promise.reject(new Error(e)))
  } else {
    const slackErrorResponse = {
      attachments: [{ color: '#e74c3c', title: 'I need a valid youtube url :(' }]
    }
    return res.status(200).send(slackErrorResponse)
  }
}
