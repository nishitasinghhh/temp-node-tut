const { log } = require('console')
const os= require('os')
//info about current user
const user=os.userInfo()
console.log(user)
//method returns system uptime in seconds
const time=os.uptime()
console,log(time) 
const currentoS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemen:os.freemem(),
}
console.log(currentoS)