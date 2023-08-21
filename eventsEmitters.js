const EventEmiter = require("events");

const myEmitter = new EventEmiter()

myEmitter.on("response", ()=>{
    console.log("RESPONSE: time to be awake");
})
myEmitter.on("response", ()=>{
    const date = new Date();
    for(let i=1; i<=5; i++){
        console.log(i, date);
    };
})

myEmitter.emit('response')

