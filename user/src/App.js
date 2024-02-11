import './App.css';
import logo from './instagram.png';
import {useState} from 'react';

function App() {

  const [login,setLogin] = useState(true);

  function isLogin(){
    setLogin(!login);
  }

  return (
    <div className="App">
      <div className="box">
        <img src={logo} alt="" />
        <input hidden={login} type="text" placeholder='Moble number/Email'/>
        <input hidden={login} type="text" placeholder='Full name'/>
        <input type="text" placeholder='Phone/Username/Email'/>
        <input type="password" placeholder='Password'/>
        <button type='submit'>{login ? 'Sign in' : 'Sign up'}</button>
        <div className="footer">
          {login ? "Doesn't have account?" : "Have an account?"} <span onClick={isLogin}>{login ? 'sign up' : 'login'}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
