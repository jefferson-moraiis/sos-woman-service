// import { server } from '../config/http';
// import { Server as SocketIOServer } from 'socket.io';

// export const io = new SocketIOServer(server);

//   io.on('connection', (socket) => {
//     socket.on('sendRoutes', async(device) => {
//       const { name } = await devicesService.addDevice(device);
//       socket.emit('deviceCreated', {message:`Device ${name} added successfully`});
//     })
//     socket.on('updateDevice', async (device) => {
//       const result = await devicesService.updateDevice(device);
//       socket.emit('deviceUpdated', result);
//     })
//   })

