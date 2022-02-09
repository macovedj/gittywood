import { db } from 'src/lib/db'

export const repositories = () => {
  return db.repository.findMany()
}

export const repository = ({ id }) => {
  return db.repository.findUnique({
    where: { id },
  })
}

export const createRepository = ({ input }) => {
  const { url, numberOfShares } = input
  console.log(context.currentUser)
  return db.repository.create({
    data: {
      url,
      numberOfShares,
      owners: {
        create: [
          {
            userId: context.currentUser.sub,
          },
        ],
      },
    },
  })
}

export const updateRepository = ({ id, input }) => {
  return db.repository.update({
    data: input,
    where: { id },
  })
}

export const deleteRepository = ({ id }) => {
  return db.repository.delete({
    where: { id },
  })
}

export const Repository = {
  owners: (_obj, { root }) =>
    db.repository.findUnique({ where: { id: root.id } }).owners(),
}
