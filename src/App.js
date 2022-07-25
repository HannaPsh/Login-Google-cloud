import './App.css';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';

function App() {
  const [loginData, setLogInData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleFailure = (result) => {
    alert('failure: ' + result);
  };

  const handleLogin = async (googleData) => {
    const res = await fetch('/api/login-google', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setLogInData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
  };

  const handleLogOut = () => {
    localStorage.removeItem(loginData);
    setLogInData(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React login with Google</h1>
        <div>
          {loginData ? (
            <div>
              <h2>You logged in as {loginData.email}</h2>
              <button onClick={handleLogOut}>LogOut</button>
            </div>
          ) : (
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
