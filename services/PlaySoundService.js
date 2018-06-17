const player = require('play-sound')()
const youtubeStream = require('youtube-audio-stream')
const decoder = require('lame').Decoder
const Speaker = require('speaker')

module.exports = {
  play: () => {
    player.play('assets/audio/sample.mp3', (err) => {
      if (err) console.log('Oops', err)
    })
  },

  playFromUrl: (url) => {
    const speaker = new Speaker({})

    console.log(`Youtube Url: ${url}`)
    const youtubeStreamPromise = youtubeStream(url)
    .on('finish', () => speaker.close())
    .on('error', () => speaker.close())
    .pipe(decoder())
    .pipe(speaker)

    return Promise.resolve(youtubeStreamPromise)
  }
}
