const PlaySoundService = require('../services/PlaySoundService')

module.exports.handle = (req, res) => {
  const body = req.body

  if (!body || !body.text) {
    res.status(200).send({message: 'success'})

    return PlaySoundService.play()
  }
  const youtubeUrlRegex = new RegExp(/^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/)

  if (body.text && youtubeUrlRegex.test(body.text)) {
    const slackResponse = {
      attachments: [
        {
          color: '#36a64f',
          title: 'Playing your link'
        }
      ]
    }
    res.status(200).send(slackResponse)
    return PlaySoundService.playFromUrl(body.text).catch(e => Promise.reject(new Error(e)))
  } else {
    const slackErrorResponse = {
      attachments: [
        {
          color: '#e74c3c',
          title: 'I need a valid youtube url :('
        }
      ]
    }
    return res.status(200).send(slackErrorResponse)
  }
}
