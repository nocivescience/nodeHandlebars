const {Pool} = require('pg');
const pool=new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: "comenius12",
    port: 5432
});
module.exports=pool;
// module.exports= {
//     query: (text, params)=>{
//         return pool.query(text, params)
//     }
// }