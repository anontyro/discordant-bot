class BotResponse {
        
    constructor(name, message = 'NA', action = 'create'){
        this.name = name;
        this.message = message;
        this.action = action;
        this.timestamp = Date.now();
    }

    setName(name){
        this.name = name;
    }

    setAction(action){
        this.action = action;
    }

    setMessage(message){
        this.message = message;
    }

    toJson(){
        const output = {
            name: this.name,
            message: this.message,
            action: this.action,
            timestamp: this.timestamp
        }
        return JSON.parse(output);
    }

    toString(){
        return JSON.stringify(this.toJson());
    }

}

module.exports ={
    BotReponse: BotResponse,
}

// module.exports ={
//     class BotResponse {

//     }
//     botResponse = (name, message, action) =>{
//         this.name = name;
//         this.message = message;
//         this.action = action;


//     }
// }