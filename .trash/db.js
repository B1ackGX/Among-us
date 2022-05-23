const mysql = require('mysql');
module.exports =  mysql.createConnection({
    host:'DB-BUF-01',
    user:'u63162_PiHJmkR0SL',
    password:'lz6zauiUoZBDTV..1TTHS1Gq',
    database:'s63162_among_us_database'
}).then((connection) => {
    console.log(`Database Connected!`);
    return connection;
}).catch(err => console.error(err));