const { RANDOM } = require("mysql/lib/PoolSelector");
const {db} = require("./mysql_driver");
const {getRandomInt} = require("./utils")

class Server extends db{
    
    constructor(){
        super();        
        this.imageObj;
    }
    run(){
        var RandomIndex;
        this.fetchImage({index: 0}, (result)=>{this.imageObj = result})
        var mainLoop = setInterval(()=>{
            this.num_of_elements_db((res)=>{RandomIndex = getRandomInt(res)})
            setTimeout(()=>{
                this.fetchImage({index: RandomIndex}, (result)=>{this.imageObj = result})
            }, 2000)
        }, 86400000)//24hrs
          
    }
    getPickOfDayObj(callback){
        setTimeout(()=>{return callback(this.imageObj)}, 2000)
    }

}

module.exports= {Server}