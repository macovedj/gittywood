import { owners } from './owners'

describe('owners', () => {
  scenario('returns all owners', async (scenario) => {
    const result = await owners()

    expect(result.length).toEqual(Object.keys(scenario.owner).length)
  })
})
