let mysql=require('mysql');

let obj = {
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'lms',
    multipleStatements: true
};

var connection = mysql.createConnection(obj);


// let connection=mysql.createConnection();
function insertIntodb(name,author,genre,cb) {

    connection.query(`Insert into data (name,author,genre) values('${name}','${author}','${genre}')`, function(error, results){
        cb();


    });





}
function searchIntodb(name,cb){
    connection.query(`Select * from data  where name =('${name}')`,function (err,results,fields) {
        if(err){
            console.log(err);
            return;
        }

        else {
            cb(results);
        }
        // console.log(fields);
        
    }) 



}

module.exports={
    connection:connection,
    insertIntodb:insertIntodb,
    searchIntodb:searchIntodb,

};



//