import bcrypt from 'bcryptjs'

export class Bcrypt {
  static hash(payload: string) {
    const salt = bcrypt.genSaltSync(10)

    return bcrypt.hashSync(payload, salt)
  }

  static compare(payload: string, hashed: string) {
    return bcrypt.compareSync(payload, hashed)
  }
}
