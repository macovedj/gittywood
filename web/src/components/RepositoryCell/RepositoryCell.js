export const QUERY = gql`
  query FindRepositoryQuery($id: String!) {
    repository: repository(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ repository }) => {
  return <div>{JSON.stringify(repository)}</div>
}
