import { useState, useContext } from 'react'; //useContext-et importálom
import { userContext } from './UserContext';  //userContext-et importálom
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { user, setUser } = useContext(userContext); //useContext használata
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email);
    if (!name || !email) return;
    setUser({ name: name, email: email });
    // console.log(user);
    navigate('/dashboard')
  };

  return (
    <section className='section'>
      <form className='form' onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  );
};
export default Login;
