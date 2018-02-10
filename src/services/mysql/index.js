
const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'KayK2809!@#$%', 
    database: 'restiful_ws'
})

const errorHandler =  (error, msg, rejectFunction) => {
    consele.error(error)
    rejectFunction({ error: msg })
}

const categoryModule = require('./categories')

module.exports = {
    categories: () => categoryModule
}
