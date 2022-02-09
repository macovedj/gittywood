import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import NewOwner from 'src/components/Owner/Owner'

const User = ({ id }) => {
  return (
    <div>
      <h2>{'User'}</h2>
      <NewOwner id={id} />
    </div>
  )
}

export default User
