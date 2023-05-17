import * as http from 'http';
import * as fs from 'fs';

let server = http.createServer((request,response)=>{
  if(request.url==='/'){
    fs.readFile('./test.html',(err,data)=>{
      response.writeHead(200);
      response.end(data);
    })
  }
})
server.listen(3080,()=>{
  console.log('server 작동 중 port : 3080')
});
