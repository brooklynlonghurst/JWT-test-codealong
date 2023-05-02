import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from 'axios'

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")

  const handleLogin = () => {
    axios
      .post('/api/login', {username, password})
      .then((res) => {
        console.log(res.data)
        setToken(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleTest = () => {
    axios
      .post('/api/test', {token})
      .then((res) => {
        console.log(res.data)
      })
      .catch((err))
  }

  return (
    <div className="App">
      <h1>JWT Test</h1>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleTest}>Test</button>
    </div>
  );
}

export default App;
