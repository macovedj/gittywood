import { MetaTags } from '@redwoodjs/web'
import Repository from 'src/components/Repository'

const RepositoryPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Repository" description="User page" />

      <h1>RepositoryPage</h1>
      <Repository id={id} />
    </>
  )
}

export default RepositoryPage
