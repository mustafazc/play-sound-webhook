const PlaySoundService = require('../services/PlaySoundService')

module.exports.handle = (req, res) => {
  res.status(200).send({message: 'success'})
  if (!req.body || !req.body.url) return PlaySoundService.play()
}
