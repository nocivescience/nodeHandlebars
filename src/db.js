const {Pool} = require('pg');
const pool= new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: "comenius12",
    port: 5432,
});
module.exports= {
    query: function (texto, params,callback){
        return pool.query(texto, params, callback)
    }
}