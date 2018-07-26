const router = require('express').Router()
const PlaySoundController = require('../controllers/PlaySoundController')
const publicIp = require('public-ip')

router.get('/health', (req, res) => res.status(200).send('OK'))
router.post('/play', PlaySoundController.handle)
router.get('/ip', (req, res) => publicIp.v4().then(ip => res.send(ip)))

module.exports = router
