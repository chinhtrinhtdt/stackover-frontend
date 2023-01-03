import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import styles from './login.module.css'
import { authApi } from '../../api';
import { LOGO_SECONDARY_IMAGE_URL } from '../../mocks';

function Login() {
  const navigate = useNavigate()

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    const loginObject = {
      username,
      password
    }

    if (username && password) {
      try {
        const response = await authApi.postApiLogin(loginObject)
        localStorage.setItem('token', response.data.access_token)
        response.status === 200 && navigate('/')
      } catch (error) {
        console.log(error)
      }
    }
    return
  }

  return (
    <div className='d-grid gap-2 col-4 mx-auto p-3'>
      <div className="d-flex align-items-center justify-content-center">
        <img alt='logo' className={styles.logo} src={LOGO_SECONDARY_IMAGE_URL} />
        <h5>Stack Overflow</h5>
      </div>

      <form className='d-grid gap-2 p-4 mt-4 bg-light shadow-sm rounded' >
        <div className="form-group">
          <label htmlFor="username" className="fw-bold pb-1">Username</label><br />
          <input onChange={e => setUsername(e.target.value)} type="text" name="username" id="username" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="fw-bold pb-1">Password</label><br />
          <input onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary mt-2" onClick={handleSubmit}>Login</button>
      </form>

      <div className='text-center'>
        <p>Don’t have an account?
          <Link to="/register"> Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login