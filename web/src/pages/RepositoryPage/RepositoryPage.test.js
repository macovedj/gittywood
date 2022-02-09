import { render } from '@redwoodjs/testing/web'

import RepositoryPage from './RepositoryPage'

describe('RepositoryPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RepositoryPage />)
    }).not.toThrow()
  })
})
