const { writeFile, readFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() =>{
    try {
        const first = await readFilePromise("./content/first.txt", "utf8")
        const second = await readFilePromise("./content/second.txt", "utf8")
        await writeFilePromise("./content/write1", `${first}, ${second}`)
        console.log("file written in to...");
    } catch (error) {
        console.log(error);
    }
}
start()


// console.log(readfile);
// const getText = (path) =>{
//     return new Promise((resolve, reject) => {
//         const readfile = readFile(path, "utf8", (err, data)=>{
//             if (err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getText("./content/first.txt")
//     .then((result)=> console.log(result))
//     .catch((err)=> console.log(err))