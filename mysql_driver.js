
var mysql = require('mysql');
const {v4: uuidv4} = require('uuid');


class db{
    constructor(){
        this.db = mysql.createConnection({
            host: "picofdaydb.ca1tiucmqwpl.us-west-2.rds.amazonaws.com",
            port: "3306",
            user: "admin",
            password: "Omariscool1234",
            database: 'picofdayDB'
        })
    }

    connect(){
        this.db.connect((error)=>{if(error != null){console.log(error.code)}})
    }
    
    uploadImage(JSONObject){
        this.db.query('INSERT INTO picofdayDB.ImageData (ind, id, author, date, description, image)'
        + 'VALUES (?,?,?,?,?,?)', ["null",uuidv4(),JSONObject.author,"now()",JSONObject.description,JSONObject.image],
        (error)=>{if(error != null){console.log(error.code)}})//end of query
    }
    fetchImage(JSONObject, callback){
        let sqlQuery = 'SELECT * FROM picofdayDB.ImageData WHERE ind=' + JSONObject.index;
        this.db.query(sqlQuery, (error, results) => { if (error != null){throw error}
            else { 
                return callback(JSON.stringify(results[0]))} })
    }
    num_of_elements_db(callback){
        this.db.query('SELECT COUNT(id) FROM picofdayDB.ImageData', 
        (err, result)=>{if(err != null){throw err} else {
            var resultObj = Object.values(JSON.stringify(result[0]))
            return callback(resultObj[0])}})
    
    }
}

module.exports = {db}
