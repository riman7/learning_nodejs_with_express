const os = require('os');
var myOsInfo ={
    name: os.type(),
    release: os.release(),
    version: os.version(),
    username: os.userInfo().username,
    up_time: os.uptime()
}
console.log(myOsInfo);