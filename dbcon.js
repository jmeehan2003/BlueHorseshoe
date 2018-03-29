var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'us-cdbr-iron-east-05.cleardb.net',
  user            : 'ba44a897bf7aa1',
  password        : '51f6be59',
  database        : 'heroku_432746716b15bdc',
  dateStrings	  : true
});

module.exports.pool = pool;

