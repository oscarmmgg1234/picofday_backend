const {db} = require("./mysql_driver");
const {getRandomInt} = require("./utils")

class Server extends db{
    constructor(){
        super();        
        this.imageObj = {payload: "server loading data"}
    }
    run(){
        var RandomIndex;
        this.fetchImage({index: 1}, (result)=>{this.imageObj = result})
        var mainLoop = setInterval(()=>{
            this.num_of_elements_db((res)=>{RandomIndex = getRandomInt(res+1)})
            setTimeout(()=>{
                this.fetchImage({index: RandomIndex}, (result)=>{this.imageObj = result})
            }, 2000)
        }, 86400000)//24hrs = 86400000ms
          
    }
    getPickOfDayObj(){
        return this.imageObj;
    }

}

module.exports= {Server}
