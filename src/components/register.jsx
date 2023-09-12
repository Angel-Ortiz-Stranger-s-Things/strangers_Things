import { useState } from "react";
import { registerUser } from "../API/strangerAPI";
import { useNavigate } from "react-router-dom";
import "./register.css";

export default function Register({ setLoggedIn, setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError({ message: 'The Passwords must be the same.' });
    }

    try {
      const token = await registerUser(username, password);
      setLoggedIn(token);
      setUser(token);
    } catch (error) {
      setError(error);
    }
    navigate('/posts');
  }

  return (
    <div className='register'>
      <h1 className='header'>Sign Up</h1>
      <form className='registerBox' onSubmit={handleSubmit}>
        <label className='registerInfo'>
          Username: {''}
          <input
            className='registerBar'
            type='text'
            name='username'
            placeholder='Username'
            required={true}
            minLength={3}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className='registerInfo'>
          Password: {''}
          <input
            className='registerBar'
            type='password'
            name='password'
            placeholder='Password'
            required={true}
            minLength={7}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label className='registerInfo'>
          Confirm Password:{''}
          <input
            className='registerBar'
            type='password'
            name='password'
            placeholder='Password'
            required={true}
            minLength={7}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button className='registerButton'>Register</button>
      </form>
    </div>
  );
}
