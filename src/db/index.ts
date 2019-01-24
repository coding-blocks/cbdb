import debug from 'debug'
import Sequelize from 'sequelize'
import { tokenDefinition, userDefinition } from './models'
import { DB } from '../../config'

const log = debug('cbdb:sequelize')
const sequelize = new Sequelize({
  database: DB.database,
  username: DB.username,
  password: DB.password,
  host: DB.host,
  dialect: 'postgres',
  logging: log,
})

const User = sequelize.define('user', userDefinition)
const Token = sequelize.define('token', tokenDefinition)

Token.belongsTo(User)

export {
  sequelize,
  User,
  Token,
}
