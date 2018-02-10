const categories = deps => {
    return {
        all: () => {
           return new Promise((resolve, reject) => {
            const { connection, errorHandler } = deps 

            connection.querry('SELECT * FROM categories', (error, results) => {
                if (error) {
                   errorHandler(error, 'Falha ao listar as categorias', reject)
                   return false
                } 
                resolve({ categories: results })
                })
            })
        },
        save: (name) => {
            return new Promise((resolve, reject) => {
                const { connection, errorHandler} = deps

                connection.query('INSER INTO categories (name) VALUES (?)',[name], (error, results) => {
                    if (error) {
                        errorHandler(error, `Falha ao salvar a categoria ${name}`, reject)
                        return false
                    }
                    resolve({category: { name, id: results.insertId } })
                })
            })
        },
        update: (id, name) => {},
        del: (id) => {}
    }
}

module.exports.categories
