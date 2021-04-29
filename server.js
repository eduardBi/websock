const hhttp=require('http');
 const hhttpServer=hhttp.createServer(
 )
 const webSocketServer=require('websocket').server

 hhttpServer.listen(5000,()=>{
     console.log('listening on port 5000')
 })

 const wsServer=new webSocketServer({
     'httpServer':hhttpServer
 })
let clients={}
 wsServer.on('request',(req)=>{
     const connection=req.accept(null,req.origin);
     connection.on('open',()=>{
     })
     const clientId= Date.now();
     clients[clientId]={'connection':connection}
     let string=JSON.stringify(req)
     connection.send(string)
 })


