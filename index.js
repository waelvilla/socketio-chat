const express= require('express')
const http= require('http')
const app= express()
const server= http.Server(app)
const io = require('socket.io')(server)

app.get('/', (req,res)=>{
    res.sendFile(__dirname+ '/index.html')
    

})
io.on('connection',(socket)=>{
	console.log('a user connected');
	socket.on('disconnect',()=>{
		console.log('user disconnected')
    })
    socket.on('chat message', (msg,username)=>{
        io.emit('chat message', msg,username)        
    })
})

server.listen(3000, ()=>{
	console.log("listening on *:3000");
})
