var player = require('play-sound')()

module.exports.play = () => {
  player.play('assets/audio/sample.mp3', (err) => {
    if (err) console.log('Oops', err)
  })
}
