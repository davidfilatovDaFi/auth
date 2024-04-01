const jwt = require('jsonwebtoken')

class TokenService {
  async generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.JWT_ACCESS_SECRET, {expiresIn: '30d'})
    const refreshToken = jwt.sign(payload, process.JWT_RESFRESH_SECRET, {expiresIn: '30d'})
  
    return {accessToken, refreshToken}
  }

  async saveToken(userId, refreshToken) {
    const token = await pool.query('SELECT * FROM refresh_sessions WHERE user_id=$1', [userId])
    if (token.rows[0]) {
      return await pool.query('UPDATE refresh_sessions SET refresh_token=$1 WHERE refresh_token=$2', [refreshToken, token.rows[0].refresh_token])
    }
    return await pool.query('INSERT INTO refresh_sessions (user_id, refresh_token) VALUES ($1, $2) RETURNING *', [userId, refreshToken])
  }
}

module.exports = new TokenService()