const net = require("net")
const fs = require("fs")

net.createServer((connection)=>{
  let ws = fs.createWriteStream('filepath/file.txt')
  connection.pipe(ws);
  connection.on('end',()=>ws.end());
}).listen(80)
