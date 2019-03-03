const Promise = require('bluebird')
const player = Promise.promisifyAll(require('play-sound')())
const youtubeStream = require('youtube-audio-stream')
const decoder = require('lame').Decoder
const Speaker = require('speaker')

module.exports = {
  play: () => {
    player.playAsync('assets/audio/sample.mp3')
    .catch(err => Promise.reject(new Error(`Could not play sound: ${err}`)))

    // player calls .then only when playback is completed
    // Promise resolves and does not wait for file to finish playing
    return Promise.resolve()
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
