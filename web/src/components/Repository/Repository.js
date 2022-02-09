import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RepositoryForm from 'src/components/Repository/RepositoryForm'

const CREATE_REPOSITORY_MUTATION = gql`
  mutation CreateRepositoryMutation($input: CreateRepositoryInput!) {
    createRepository(input: $input) {
      url
      numberOfShares
      # owners
    }
  }
`

const Repository = () => {
  const [createRepository, { loading, error }] = useMutation(
    CREATE_REPOSITORY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Repository created')
        // navigate(routes.posts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createRepository({
      variables: {
        input: {
          url: input.url,
          numberOfShares: Number(input['Number of Shares']),
          // owners: [],
        },
      },
    })
  }
  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Owner</h2>
      </header>
      <div className="rw-segment-main">
        <RepositoryForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default Repository
