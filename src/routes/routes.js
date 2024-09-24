const Express= require('express')
const router = Express.Router()
const controller = require('../controllers/Controllers.js')
router.post("/Bloguser",controller.Blog_controller)

module.exports = router;