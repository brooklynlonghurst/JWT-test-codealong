import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from 'axios'

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    axios
      .post('/api/login', {username, password})
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="App">
      <h1>JWT Test</h1>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
