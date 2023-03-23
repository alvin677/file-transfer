const net=require('net');
const fs=require('fs');

let sock=net.createConnection(80,'ip',()=>{
  let rs=fs.createReadStream("filepath/file.txt");
  rs.pipe(sock);
  rs.on('end',()=>sock.end());
});
