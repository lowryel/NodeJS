const fs = require("fs");
// console.log(fs);

const access = fs.access('example.js', fs.constants.F_OK, (err) => {
    if (err){
        console.log(err, "such file does not exists");
    }
    else{
        console.log("File does exists", );
    }
})

console.log(access);

const readfile = fs.readFileSync("./content/first.txt", "utf8", (err, result)=>{
    if (err){
        console.log(err);
        return;
    }else{
        const first=result;
    }
});

console.log(readfile);



