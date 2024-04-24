import { io } from '../config/http';

io.on('connection', (socket) => {
  socket.on('sendLocation', async(location) => {
    socket.emit('sendLocation', location);
  })
})

