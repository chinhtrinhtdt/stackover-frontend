import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authApi } from '../../api';
import styles from './register.module.css';
import { passwordValidation } from '../../utils';

function Register() {
  const navigate = useNavigate();

  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const registerObject = {
      username,
      password,
      email
    };

    if (!username || !password || !email || !passwordValidation(password)) return;

    authApi.postApiRegister(registerObject)
      .then(res => res.status === 200 && navigate('/login'));
  }

  return (
    <div className='d-grid gap-2 col-4 mx-auto p-3'>
      <h5 className='text-center'>Create your Stack Overflow account. It's free and only takes a minute.
      </h5>

      <form className='d-grid gap-2 p-4 mt-4 bg-light shadow-sm rounded was-validation' >
        <div className="form-group">
          <label htmlFor="username" className="fw-bold pb-1">User name</label><br />
          <input onChange={e => setUserName(e.target.value)} type="text" name="username" id="username" className="form-control" required />
          <div className="invalid-feedback">
            Please choose a username.
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="fw-bold pb-1">Email</label><br />
          <input onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="fw-bold pb-1">Password</label><br />
          <input onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" className="form-control" required />
          <span className={styles.note}>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</span>
        </div>

        <button type="submit" className="btn btn-primary mt-2" onClick={handleSubmit}>Register</button>
      </form>

      <div className="text-center px-4">
        <p className={`${styles.note} m-0`}>By clicking “Register”, you agree to our
          <Link to="./#"> terms of service, privacy policy and cookie policy</Link>
        </p>
        <p className='m-0'>Already have an account?
          <Link className='text-decoration-none' to="/login"> login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register