import { owners, owner, createOwner, updateOwner, deleteOwner } from './owners'

describe('owners', () => {
  scenario('returns all owners', async (scenario) => {
    const result = await owners()

    expect(result.length).toEqual(Object.keys(scenario.owner).length)
  })

  scenario('returns a single owner', async (scenario) => {
    const result = await owner({ id: scenario.owner.one.id })

    expect(result).toEqual(scenario.owner.one)
  })

  scenario('creates a owner', async (scenario) => {
    const result = await createOwner({
      input: { userId: scenario.owner.two.userId },
    })

    expect(result.userId).toEqual(scenario.owner.two.userId)
  })

  scenario('updates a owner', async (scenario) => {
    const original = await owner({ id: scenario.owner.one.id })
    const result = await updateOwner({
      id: original.id,
      input: { userId: scenario.owner.two.userId },
    })

    expect(result.userId).toEqual(scenario.owner.two.userId)
  })

  scenario('deletes a owner', async (scenario) => {
    const original = await deleteOwner({ id: scenario.owner.one.id })
    const result = await owner({ id: original.id })

    expect(result).toEqual(null)
  })
})
