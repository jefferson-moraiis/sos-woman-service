import { IDevice, IDevicesRepository } from "../../domain/interfaces/device.interface";
import { Devices } from "../database/mongo/model/devices.model";
import { v4 as uuid } from "uuid";

export class DevicesRepository implements IDevicesRepository {

  async addDevice(device: IDevice): Promise<IDevice> {
    return await Devices.create(Object.assign(device, {
      deviceId: uuid(),
    }));
  }

  async updateDevice(device: IDevice): Promise<IDevice> {
    return await Devices.findOneAndUpdate({deviceId:device.deviceId},
      { $set: { ...device, updatedAt: Date.now() } }, {
      returnOriginal: false
    })
  }

  async getDevices(): Promise<IDevice[]> {
    return await Devices.find();
  }

  async getDeviceById(deviceId: string): Promise<IDevice> {
    return await Devices.findOne({ deviceId });
  }

  async deleteDevice(deviceId: string): Promise<void> {
    console.log(deviceId)
    return await Devices.findOneAndRemove({deviceId});
  }
}