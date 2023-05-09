const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    port:3308,
    user: 'root',
    password: '',
    database: 't_dbregistro',
    multipleStatements: true
});
mysqlConnection.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log('db is connected');
    }
});
module.exports = mysqlConnection;
