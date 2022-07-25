1. Install package
   npm install react-google-login +
   <GoogleLogin
   clientId= "894240155202-csccsbvt7dbkedsb4ff80fj15pdutbqu.apps.googleusercontent.com"
   buttonText="Log in with Google"
   onSuccess={handleLogin}
   onFailure={handleFailure}
   cookiePolicy={'single_host_origin'} ></GoogleLogin>

2. https://console.cloud.google.com/
   Create new Project
   Select Project
   in Navigation menu: API and Services => Credentials
   Configure Consent Screen => External=> Create
   ........save....save...Test Users => Add user (enter email)=> save

- Go to Credentials
  Create Credentials
  Select Oauth client ID
  Select type:web application, add a name

-Click Add URI
Added 3:
local host 3001
localhost 5000
and hieraku

-Copy your Client ID and use it in your .env file

Backend: npm install express dotenv google-auth-library
