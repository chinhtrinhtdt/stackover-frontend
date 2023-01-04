import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import { authApi } from '../../api';
import { LOGO_SECONDARY_IMAGE_URL } from '../../mocks';

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const loginObject = {
      username,
      password
    };

    document.querySelector("form")?.classList.add("was-validated")
    if (!username || !password) return;

    authApi.postApiLogin(loginObject)
      .then(res => {
        if (res.status === 201) {
          localStorage.setItem('user', JSON.stringify(res.data.user))
          localStorage.setItem('token', res.data.access_token);
          navigate('/');
        };
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='d-grid gap-2 col-4 mx-auto mt-5 p-3'>
      <div className="d-flex align-items-center justify-content-center">
        <img alt='logo' className={styles.logo} src={LOGO_SECONDARY_IMAGE_URL} />
        <h5>Stack Overflow</h5>
      </div>

      <form className='d-grid gap-2 p-4 mt-4 bg-light shadow-sm rounded' >
        <div className="form-group">
          <label htmlFor="username" className="fw-bold pb-1">Username</label><br />
          <input onChange={e => setUsername(e.target.value)} type="text" name="username" id="username" className="form-control" required />
          <div className="invalid-feedback"> Please fill a username.</div>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="fw-bold pb-1">Password</label><br />
          <input onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" className="form-control" required />
          <div className="invalid-feedback"> Please fill a passwrod.</div>
        </div>
        <button type="submit" className="btn btn-primary mt-2" onClick={handleSubmit}>Login</button>
      </form>

      <div className='text-center'>
        <p>Don't have an account?
          <Link to="/register"> Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
