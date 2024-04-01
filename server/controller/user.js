const UserService = require('../service/user')

class UserController {
  async registration(req, res, next) {
    try {
      res.json(await UserService.registration(req.body.email, req.body.password))
    } catch (error) {
      res.json('b')
    }
  }

  async login(req, res, next) {
    try {
      
    } catch (error) {
      
    }
  }

  async logout(req, res, next) {
    try {
      
    } catch (error) {
      
    }
  }

  async activate(req, res, next) {
    try {
      
    } catch (error) {
      
    }
  }

  async refresh(req, res, next) {
    try {
      res.json('b')
    } catch (error) {
      res.json('a')
    }
  }

  async getUsers(req, res, next) {
    try {
      res.json(await UserService.getUsers())
    } catch (error) {
      res.json('a')
    }
  }
  
}


module.exports = new UserController()