import bcrypt from 'bcrypt'

export class BcryptAdapter {
  constructor (private readonly salt: number) {}

  async hash (plaintext: string): Promise<string> {
    return bcrypt.hash(plaintext, this.salt)
  }

  async compare (plaintext: string, digest: string): Promise<boolean> {
    console.log("🚀 ~ BcryptAdapter ~ compare ~ digest:", digest)
    console.log("🚀 ~ BcryptAdapter ~ compare ~ plaintext:", plaintext)
    return bcrypt.compare(plaintext, digest)
  }
}
