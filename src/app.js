const sqlite3 = require('sqlite3').verbose();
let sql;

//Connect to DB
const db = new sqlite3.Database('./test.db',sqlite3.OPEN_READWRITE,(err)=>{
if(err) return console.error(err.message);
})

//create table
// sql='CREATE TABLE users(id INTEGER PRIMARY KEY,wallet_address,slack_ID)';
// db.run(sql); 

//Drop table
//db.run("DROP TABLE users");

//Insert data into table
sql='INSERT INTO users(wallet_address,slack_ID) VALUES (?,?)';
db.run(sql,["wallet 1","slack 1"],(err)=>{
if(err) return console.error(err.message);
});

//update data
// sql= 'UPDATE users SET wallet_address =? WHERE id=?'
// db.run(sql,['update wallet 1',1],(err)=>{
//    if(err) return console.error(err.message);
// });

//Delete data
// sql= 'DELETE FROM users WHERE id=?'
// db.run(sql,[1],(err)=>{
//    if(err) return console.error(err.message);
// });

//query the data
// sql= 'SELECT * FROM users';               //wallet_address  *
// db.all(sql, [],(err,rows)=>{
//     if(err) return console.error(err.message);
//       rows.forEach((row)=>{
//       console.log(row);     
//     });
// });
