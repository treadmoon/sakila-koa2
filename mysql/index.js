var mysql = require('mysql');

const config = {
    USERNAME: 'sakila',
    PASSWORD: 'mmm123',
    DATABASE: 'sakila',
    HOST: '111.230.241.251',
    PORT: 3306
}

var pool = mysql.createPool({
    host: config.HOST,
    user: config.USERNAME,
    password: config.PASSWORD,
    database: config.DATABASE,
    port: 3306,
});


class Mysql {
    constructor() {

    }
    query() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * from user', function (error, results, fields) {
                if (error) {
                    throw error
                };
                resolve(results)
            });
        })
    }
}

module.exports = new Mysql()