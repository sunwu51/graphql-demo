var mysql      = require('mysql');
const util = require('util');

var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'demo'
});

// node native promisify
const query = util.promisify(conn.query).bind(conn);


async function getById(id){
	var res = await query(`SELECT * from person where id=${id}`);
	return res[0];
}
async function insert(name){
    var res = await query(`insert into person (name) values ('${name}')`)
}
module.exports ={getById,insert}