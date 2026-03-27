import { Payload } from 'payload'

export const baseSeed = async (payload: Payload) => {
  let created
  const existing = await payload.find({ collection: 'users', where: { email: { equals: 'admin@mail.com' } } })
  if (existing.docs.length > 0) {
    created = existing.docs[0]
  } else {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@mail.com',
        password: '123444',
        role: 'admin',
      },
    })
    console.log('✓ Admin created')
  }
}
