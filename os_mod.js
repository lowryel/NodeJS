const os = require("os");
// console.log(os.arch(), 'This is a x64 based architecture');
const user = os.userInfo()
console.log(user);

const osInfo = {
  name:os.type(),
  release:os.release(),
  totalMEM:os.totalmem(),
  freemem:os.freemem(),
}

console.log(osInfo);
