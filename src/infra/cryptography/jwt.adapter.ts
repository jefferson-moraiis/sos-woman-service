import jwt from 'jsonwebtoken'

export class JwtAdapter{
  constructor (private readonly secret: string) {}

  async encrypt (plaintext: any) {
    return jwt.sign(plaintext, this.secret)
  }

  async decrypt (ciphertext: any) {
    return jwt.verify(ciphertext, this.secret) as any
  }
}
