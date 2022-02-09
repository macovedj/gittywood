import { db } from 'src/lib/db'

export const owners = () => {
  return db.owner.findMany()
}

export const owner = ({ id }) => {
  return db.owner.findUnique({
    where: { id },
  })
}

export const createOwner = ({ input }) => {
  return db.owner.create({
    data: input,
  })
}

export const updateOwner = ({ id, input }) => {
  return db.owner.update({
    data: input,
    where: { id },
  })
}

export const deleteOwner = ({ id }) => {
  return db.owner.delete({
    where: { id },
  })
}

export const Owner = {
  user: (_obj, { root }) =>
    db.owner.findUnique({ where: { id: root.id } }).user(),
  repository: (_obj, { root }) =>
    db.owner.findUnique({ where: { id: root.id } }).repository(),
}
