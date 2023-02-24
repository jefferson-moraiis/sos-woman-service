import { DevicesController } from "../controllers/devices.controller";
import { DevicesUseCase } from "../../domain/usecases";
import { DevicesRepository } from "../../infra/repositories/device.repository";


export const DevicesFactory = () => {
  const devicesRepository =  new DevicesRepository();
  const devicesUsecases = new DevicesUseCase(devicesRepository);
  return new DevicesController(devicesUsecases);
}