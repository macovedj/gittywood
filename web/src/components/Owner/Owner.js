import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import OwnerForm from 'src/components/Owner/OwnerForm'

const CREATE_OWNER_MUTATION = gql`
  mutation CreateOwnerMutation($input: CreateOwnerInput!) {
    createOwner(input: $input) {
      id
    }
  }
`

const NewOwner = ({ id }) => {
  const [createOwner, { loading, error }] = useMutation(CREATE_OWNER_MUTATION, {
    onCompleted: () => {
      toast.success('Owner created')
      // navigate(routes.posts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createOwner({
      variables: { ...input, userId: id, id: `${id}-${input.url}` },
    })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Owner</h2>
      </header>
      <>{id}</>
      <div className="rw-segment-main">
        <OwnerForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewOwner
