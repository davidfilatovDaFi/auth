import { useEffect, useState } from 'react'

interface IUser {
  id: string,
  email: string,
  password: string
}

function App() {
  const [users, setUsers] = useState<IUser[]>([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const getUsers = async () => {
    const response = await fetch('http://localhost:3001/api/users')
    const users = await response.json()
    setUsers(users)
  }

  const registration = async () => {
    await fetch('http://localhost:3001/api/registration', {method: 'POST', body: JSON.stringify({email: email, password: password}),   headers: {
      "Content-type": "application/json; charset=UTF-8"
    }})
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='h-screen flex flex-col gap-5 items-center justify-center bg-red-500'>
      <div className='flex gap-6 flex-col items-center justify-center bg-white p-10 rounded-lg'>
        <h2 className='text-[48px]'>Регистрация</h2>
        <div className='flex flex-col gap-5'>
          <div>
            <h2>Введите почту</h2>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='border-red-500 border-[1px]' type="text" />
          </div>
          <div>
            <h2>Введите пароль</h2>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className='border-red-500 border-[1px]' type="password" />
          </div>
          <button onClick={registration} className='bg-red-500 text-white p-2 rounded-md'>Зарегистрироваться</button>
        </div>
      </div>
      <ul className='text-white'>
        {users.map(user => <li key={user.id}>{user.email}</li>)}
      </ul>
    </div>
  )
}

export default App
