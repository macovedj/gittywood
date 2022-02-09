import { render } from '@redwoodjs/testing/web'

import Repository from './Repository'

describe('Repository', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Repository />)
    }).not.toThrow()
  })
})
