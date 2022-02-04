import { db } from 'src/lib/db'

export const repositories = () => {
  return db.repository.findMany()
}

export const repository = ({ id }) => {
  return db.repository.findUnique({
    where: { id },
  })
}

export const Repository = {
  owners: (_obj, { root }) =>
    db.repository.findUnique({ where: { id: root.id } }).owners(),
}
