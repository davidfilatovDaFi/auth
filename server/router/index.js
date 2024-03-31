const Router = require('express')
const UserController = require('../controller/user')

const router = new Router()

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.get('/users', UserController.getUsers)
router.get('/active/:link', UserController.activate)
router.get('/refresh', UserController.refresh)

module.exports = router