// run `node index.js` in the terminal
import http from 'http'
import fs from 'fs'

http.createServer((req,res)=>{
  if(req.url==='/'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('<h1>Home page</h1>')
  }else if(req.url==='/about'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('<h1>About us</h1>')
  }else if(req.url ==='/contact'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('<h1>Contact us</h1>')
  }else{
    res.writeHead(404,{'Content-Type':'text/html'})
    res.end('<h1>Page not found!</h1>')
  }
}).listen(5000,()=>{
  console.log('server up and running')
})
