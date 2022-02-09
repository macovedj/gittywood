export const standard = defineScenario({
  owner: {
    one: {
      data: {
        user: { create: { githubUUID: 'String5404375', email: 'String' } },
      },
    },

    two: {
      data: {
        user: { create: { githubUUID: 'String2720878', email: 'String' } },
      },
    },
  },
})
