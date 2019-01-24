module.exports = {
  DB: {
    database: process.env.DB_NAME || 'cbdb',
    username: process.env.DB_USER || 'cbdbuser',
    password: process.env.DB_PASS || 'cbdbpass',
    host: process.env.DB_HOST || 'localhost',
  },
}
