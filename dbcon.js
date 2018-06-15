var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'us-cdbr-iron-east-05.cleardb.net',
  user            : '*************',
  password        : '*************',
  database        : '*************',
  dateStrings	  : true
});

module.exports.pool = pool;

