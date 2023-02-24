export interface IDevice {
    deviceId?: string;
    name: string
    status: boolean
    temperature?: number
    humidity?: number
    brightness?: number
}

export interface IDevicesRepository {
    addDevice(device: IDevice): Promise<IDevice>
    updateDevice(device: IDevice): Promise<IDevice>
    getDevices(): Promise<IDevice[]>
    getDeviceById(deviceId: string): Promise<IDevice>
    deleteDevice(deviceId: string): Promise<void>
}