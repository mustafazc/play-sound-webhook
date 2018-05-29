const router = require('express').Router()
const PlaySoundController = require('../controllers/PlaySoundController')

router.get('/health', (req, res) => res.status(200).send('OK'))
router.post('/play', PlaySoundController.handle)

module.exports = router
