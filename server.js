//Server express
const express = require('express');
const app = express();
const port = 8000

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
    app.use(express.static('./'));             //arquivo estatico - then
});

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
});


/*Server (site)
const http = require('http')
const port = 8000
const ip = 'localhost'

const server = http.createServer((req, res) => {
   
    res.end('<h1>Ola Mundo!!!</h1>')
  })

  server.listen(port, ip, () => {
      console.log(`Rodando na porta ${port}`)
   })
   */