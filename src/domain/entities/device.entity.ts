export class Device {
  deviceId?: string
  name: string
  status: boolean
  temperature?: number
  humidity?: number
  brightness?: number

  private constructor(device: Device) {
    return Object.assign(this, {...device});
  }

  static create(device: Device) {
    return new Device({ ...device})
  }

}

