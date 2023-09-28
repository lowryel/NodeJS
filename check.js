console.log(node);

import { log } from "util";

function bluecheck(check=true) {
    if (check){
        console.log('Eligible for Ad revenue');
    }
    else{
        console.log('Not eligible for ad revenue')
    }
}
log("hello")
export default bluecheck;
