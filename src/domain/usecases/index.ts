import { IDevicesRepository } from '../interfaces/device.interface'
import { IDevice } from '../interfaces/device.interface';
import { Device } from '../entities/device.entity';

export class DevicesUseCase {

  constructor(private devicesRepository: IDevicesRepository) {}

  async addDevice(device: IDevice) {
      try {
          const deviceCreate = Device.create(device);
          return await this.devicesRepository.addDevice(deviceCreate);
      } catch (err) {
          throw new Error(`Not possible to add device: ${err}`);
      }
  }
  async updateDevice(device: IDevice) {
    try {
        const deviceCreate = Device.create(device);
        return await this.devicesRepository.updateDevice(deviceCreate);
    } catch (err) {
        throw new Error(`Not possible to update device: ${err}`);
    }
  }

  async getDevices() {
    try {
        return await this.devicesRepository.getDevices();
    } catch (err) {
        throw new Error(`Not possible to get devices: ${err}`);
    }
  }
  async getDeviceById(deviceId: string) {
    try {
        return await this.devicesRepository.getDeviceById(deviceId);
    } catch (err) {
        throw new Error(`Not possible to get device: ${err}`);
    }
  }

  async deleteDevice(deviceId: string) {
    try {
        return await this.devicesRepository.deleteDevice(deviceId);
    } catch (err) {
        throw new Error(`Not possible to delete device: ${err}`);
    }
  }
}