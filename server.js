//start
const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  console.log(req.url)
  if(req.url === "/") {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    fs.readFile('./index.html', null, (error, data) => {
      res.write(data)
      res.end()
    })
  } else if(req.url === '/thing.js') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    fs.readFile('./thing.js', null, (error, data) => {
      res.write(data)
      res.end()
    })
  } else {
    res.statusCode = 404
    res.statusMessage = "resource not found"
    res.end()
  }
  
  
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
