import { io } from '../config/http';
import { DevicesRepository } from '../../infra/repositories/device.repository';
import { DevicesUseCase } from '../../domain/usecases';

const devicesService = new DevicesUseCase(new DevicesRepository());

  io.on('connection', (socket) => {
    socket.on('addDevice', async(device) => {
      const { name } = await devicesService.addDevice(device);
      socket.emit('deviceCreated', {message:`Device ${name} added successfully`});
    })
    socket.on('updateDevice', async (device) => {
      const result = await devicesService.updateDevice(device);
      socket.emit('deviceUpdated', result);
    })
    socket.on('getDevices', async () => {
      const devices =  await devicesService.getDevices();
      socket.emit('getDevices',devices);
    })
    socket.on('getDeviceById', async () => {
      const deviceId = socket.handshake.query.deviceId
      const devices =  await devicesService.getDeviceById(`${deviceId}`);
      socket.emit('getDeviceById',devices);
    })
    socket.on('deleteDevice', async() => {
      const deviceId = socket.handshake.query.deviceId
      await devicesService.deleteDevice(`${deviceId}`);
      socket.emit('deviceDeleted',{message:`Device deleted successfully`});
    })
  })

