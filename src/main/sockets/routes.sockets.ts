import { io } from '../config/http';
import { UserRepository } from '../../infra/repositories';
import * as admin from 'firebase-admin';

const customerRepository = new UserRepository()

const getUserByToken = async(token: string) => {
  try {
    const customer = await admin.auth().verifyIdToken(token);
    return await customerRepository.findUserById(customer.uid)
  } catch (error) {
    return null;
  }
}

io.on('connection', (socket) => {
  socket.on('sendLocation', async(event) => {
    const userFind = await getUserByToken(event.headers?.Authorization?.split('Bearer ')[1]);
    const userUpdated = await customerRepository.updateUser(userFind.id,{location: event.location})
    console.log("🚀 ~ socket.on ~ userUpdated:", userUpdated)
    socket.emit('getLocation', userUpdated);
  })

  socket.on('getLocation', async(event) => {
    const user = await customerRepository.findUserById(event.id)
    socket.emit('getLocation', user);
  })
})



