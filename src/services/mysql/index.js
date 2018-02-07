
const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'KayK2809!@#$%', 
    database: 'restiful_ws'
})

const categoryModule = require('./categories')

module.exports = {
    categories: () => categoryModule
}
