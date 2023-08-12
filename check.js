const { log } = require("util");

function bluecheck(check=true) {
    if (check){
        console.log('Eligible for Ad revenue');
    }
    else{
        console.log('Not eligible for ad revenue')
    }
}

module.exports = bluecheck;

console.log(module.exports);