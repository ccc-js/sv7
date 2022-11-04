import * as sv6 from '../mod.js'

console.log('sv6=', sv6)
let server = new sv6.Server()
server.public('/public')
server.route()
server.listen(8000)
