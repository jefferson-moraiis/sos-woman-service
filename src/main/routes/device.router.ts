import { Router } from 'express'
import { DevicesFactory } from '../factories/device.factory'

export default (router: Router): void => {
  router.post("/add-device",(req,res)=> DevicesFactory().addDevice(req,res))
  router.put("/update-device",(req,res)=> DevicesFactory().updateDevice(req,res))
  router.get("/get-devices",(req,res)=> DevicesFactory().getDevices(req,res))
  router.get("/get-device/:deviceId",(req,res)=> DevicesFactory().getDeviceById(req,res))
  router.delete("/delete-device/:deviceId",(req,res)=> DevicesFactory().deleteDevice(req,res))
}