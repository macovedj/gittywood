import { db } from 'src/lib/db'

export const owners = () => {
  return db.owner.findMany()
}

export const owner = ({ id }) => {
  return db.owner.findUnique({
    where: { id },
  })
}

export const Owner = {
  user: (_obj, { root }) =>
    db.owner.findUnique({ where: { id: root.id } }).user(),
  Repository: (_obj, { root }) =>
    db.owner.findUnique({ where: { id: root.id } }).Repository(),
}

export const createOwner = ({ input }) => {
  return db.owner.create({
    data: input,
  })
}
