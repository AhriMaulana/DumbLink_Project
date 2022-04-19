const express = require('express')
const router = express.Router()

const { auth } = require('../middlewares/auth')
const { uploadFile } = require('../middlewares/upload')
const { register, login, checkAuth } = require('../controllers/auth')
const { updateUser, deleteUser, getUserId } = require('../controllers/user')
const { addLink, getlinks, getlink, deletelink, updatelink } = require('../controllers/link')

router.post('/register', register)
router.post('/login', login)
router.patch('/update', auth, updateUser)
router.delete('/delete/:id', auth, deleteUser)
router.get('/getuser', auth, getUserId)
router.post('/addlink', auth, addLink)
router.get('/getlinks', auth, getlinks)
router.get('/getlink/:id', auth, getlink)
router.delete('/deletelink/:id', auth, deletelink)
router.patch('/updatelink/:id', auth, updatelink)
router.get('/checkAuth', auth, checkAuth)

module.exports = router