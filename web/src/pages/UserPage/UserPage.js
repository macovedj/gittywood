import { MetaTags } from '@redwoodjs/web'
import User from 'src/components/User'

const UserPage = ({ id }) => {
  return (
    <>
      <MetaTags title="User" description="User page" />

      <h1>UserPage</h1>
      <User id={id} />
    </>
  )
}

export default UserPage
