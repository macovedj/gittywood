import { repositories } from './repositories'

describe('repositories', () => {
  scenario('returns all repositories', async (scenario) => {
    const result = await repositories()

    expect(result.length).toEqual(Object.keys(scenario.repository).length)
  })
})
