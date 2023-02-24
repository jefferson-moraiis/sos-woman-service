import { model, Schema } from "mongoose";
import { IDevice } from "../../../../domain/interfaces/device.interface";

const deviceSchema = new Schema({
  deviceId:{
    type: String,
    required: true,
  },
  name: {
    type: String,
    require: true
  },
  status: {
    type: Boolean,
    require: true,
    default: false
  },
  temperature: {
    type: Number,
  },
  humidity: {
    type: Number,
  },
  brightness: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default:Date.now
  }
})

export const Devices = model<IDevice>('Devices', deviceSchema);
