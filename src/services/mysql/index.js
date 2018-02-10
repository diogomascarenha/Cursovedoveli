
const mysqlServer = require('mysql')
const configDb    = require('../../config/db')

const connection = mysqlServer.createConnection(configDb)

const errorHandler =  (error, msg, rejectFunction) => {
    consele.error(error)
    rejectFunction({ error: msg })
}

const categoryModule = require('./categories')({connection, errorHandler})

module.exports = {
    categories: () => categoryModule
}
