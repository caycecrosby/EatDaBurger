var mysql = require('mysql');
var 

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mysqlpass',
    database:'burgers_db'
})
};

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: "+connection.threadId);
});

module.exports = connection;