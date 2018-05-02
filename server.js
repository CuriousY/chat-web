let express = require('express'),
    app = express(),
    socket = require('socket.io'),
    port = process.env.PORT || 3000;

app.use(express.static('public'));

const server = app.listen(port, () => {
    console.log('listening to ', port);
});

const io = socket(server);

io.on('connection', (socket) => {
    console.log('made socket connection ');
    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    });


    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    });
});