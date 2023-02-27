import React, { useState } from 'react';
import { signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  let navigate = useNavigate();
  function login () {
    alert(email + password);
  }

  return (
    <div className="Login">
      <h1>Login</h1>
        <input type="button" value="bella" onClick={() => navigate("./Home")}></input>
        <label>Email:</label><br></br>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input><br></br>
        <label>Password:</label><br></br>
        <input type="password" id="password" value={password} onChange={(e) => setPass(e.target.value)}></input><br></br>
        <input type="button" value="Login" onClick={() =>
          signInWithEmailAndPassword(auth, email, password).then((userCredential) => {const user = userCredential.user; navigate("./Home");}).catch((error)=>{const errorMessage = error.code})
        }></input><br></br>
        <h1>{true?"si":"no"}</h1>

    </div>
  );
}

export default Login;
