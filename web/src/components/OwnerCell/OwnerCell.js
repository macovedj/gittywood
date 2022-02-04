export const QUERY = gql`
  query FindOwnerQuery($id: String!) {
    owner: owner(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ owner }) => {
  return <div>{JSON.stringify(owner)}</div>
}
