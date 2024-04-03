const pool = require('../db')
const bcrypt = require('bcrypt')
const uuid = require('uuid')

class UserService {
  async registration(email, password) {
    console.log(email, password)
    const user = await pool.query('SELECT * FROM users WHERE email=$1', [email])
    if (user.rows[0]) throw new Error(`Пользователь с email ${email} уже существует`)
    
    const hashPassword = bcrypt.hash(password, 3)
    const activationLink = uuid.v4()
    await pool.query('INSERT INTO users (email, password, activation_link) VALUES ($1, $2, $3) RETURNING *', [email, hashPassword, activationLink])
  }

  // async login(req, res, next) {
  //   try {
      
  //   } catch (error) {
      
  //   }
  // }

  // async logout(req, res, next) {
  //   try {
      
  //   } catch (error) {
      
  //   }
  // }

  // async activate(req, res, next) {
  //   try {
      
  //   } catch (error) {
      
  //   }
  // }

  async getUsers() {
    const users = (await pool.query('SELECT * FROM users')).rows
    console.log(users)
    return users
  }
}

module.exports = new UserService()