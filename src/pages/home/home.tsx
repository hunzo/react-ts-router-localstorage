import { useAuth } from '../../components/AuthProvider'

const HomePage = () => {
  const { user } = useAuth()
  return (
    <div>
      <h1>Hello {user.username} !!!</h1>
    </div>
  )
}

export default HomePage
