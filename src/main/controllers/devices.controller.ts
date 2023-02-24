import { DevicesUseCase } from '../../domain/usecases';

export class DevicesController {

  constructor(private devicesUsecases: DevicesUseCase) {}

  async addDevice(req,res){
    try {
      const { name } = await this.devicesUsecases.addDevice(req.body);
      res.status(201).json({message:`Device ${name} added successfully`});
    } catch (error) {
      res.status(error.status).json({message: error.message});
    }
  }

  async updateDevice(req,res){
    try {
      const device = await this.devicesUsecases.updateDevice(req.body);
      res.status(200).json(device);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
  }

  async getDevices(req,res){
    try {
      const device = await this.devicesUsecases.getDevices();
      res.status(200).json(device);
    } catch (error) {
      res.status(error.status).json({message: error.message});
    }
  }

  async getDeviceById(req,res){
    try {
      const device = await this.devicesUsecases.getDeviceById(req.params.deviceId);
      res.status(200).json(device);
    } catch (error) {
      res.status(error.status).json({message: error.message});
    }
  }

  async deleteDevice(req,res){
    try {
      await this.devicesUsecases.deleteDevice(req.params.deviceId);
      res.status(200).json({message:`Device deleted successfully`});
    } catch (error) {
      res.status(error.status).json({message: error.message});
    }
  }
}