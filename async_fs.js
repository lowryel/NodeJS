const fs = require("fs");
const readfile = fs.readFile("./content/first.txt", "utf8", (err, result) => {
    if (err){
        console.log(err);
    }
    const first=result;

    const readfile = fs.readFile("./content/second.txt", "utf8", (err, result) => {
        if (err){
            console.log(err);
        }
        const second=result;
        const writefile=fs.writeFile("./content/write.txt", `${first}, ${second}`, (err, result) => {
            if (err){
                console.log(err);
            }else{
                console.log(result);
            }
        })
    })
})




