const http = require('http')

const server = http.createServer( (req, res) => {
    res.end( "Hello people")
})

server.listen(3000, () => {
    console.log('Servere has been started..')
})
