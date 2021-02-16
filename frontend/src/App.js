import { BrowserRouter as Router, Route } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from "./screens/LoginScreen"

import React from "react"
function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/login' component={LoginScreen} />
        <Route path='/' exact component={HomeScreen} />
      </Router>
    </div>
  )
}

export default App
