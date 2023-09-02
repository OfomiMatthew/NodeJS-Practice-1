const express = require('express')
const app = express()

const PORT = 9000

app.get('/',(req,res)=>{
  
  res.send('<h1>Tetsing express</h1>')
}).listen(PORT,()=>{
  console.log(`listening on port ${PORT}`)
})