const express = require('express')
const app = express()

const PORT = 9000

app.get('/',(req,res)=>{
  
  res.send('Tetsing express')
})

app.post('/',(req,res)=>{
  res.send('Sending data via the internet')
})

app.listen(PORT,()=>{
  console.log(`listening on port ${PORT}`)
})