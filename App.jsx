import { useState } from "react";
import './App.css';
import pics from './assets/pics.jpg'

function App() {
  const [isAuthenticated,setIsAuthenticated] = useState('false');
  const [username,setUsername] = useState('');
  const [Email,setEmail] = useState ('');
  const [password,setPassword] = useState ('');

  const handleLogin = (e) => {
  e.preventDefault();

  const validUsername = 'appy';
  const validEmail = 'api@gmail.com';
  const validPassword = '738816';

  if(username === validUsername && Email === validEmail && password === validPassword){
    setIsAuthenticated(true);
  }
  else{
    alert('invalid Credentials');
  }
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setEmail('');
    setPassword('');
  }

  if(!isAuthenticated){
    return(
      <div style={{padding: '2rem'}}>
        <h2>login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <input type="text"
             placeholder="username" 
             value={username}
             on onChange={(e)=> setUsername (e.target.value)}
             required
            />
          </div>
           <div>
            <input type="text"
             placeholder="Email" 
             value={Email}
             on onChange={(e)=> setEmail (e.target.value)}
             required
            />
          </div>
          <div>
            <input type="password"
             placeholder="password" 
             value={password}
              on onChange={(e)=> setPassword (e.target.value)}
             required
            />
          </div>
          <button type="submit">login</button>
        </form>
      </div>
    );
  }

return(
  <div style={{padding: '2rem'}}>
    <h2>welcome,{username}!</h2>
    <p><img src={pics}/></p>
    <button onClick={handleLogout}>logout</button>
  </div>
);
}
export default App;