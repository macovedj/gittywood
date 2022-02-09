import { render } from '@redwoodjs/testing/web'

import Owner from './Owner'

describe('Owner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Owner />)
    }).not.toThrow()
  })
})
