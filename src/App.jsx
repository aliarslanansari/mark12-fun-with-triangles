import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import IsTriangle from './pages/IsTriangle'
import Hypotenuse from './pages/Hypotenuse'
import Teams from './pages/AreaOfTriangle'
import SignUp from './pages/Signup'
import Quiz from './pages/Quiz'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={IsTriangle} />
        <Route path='/quiz' component={Quiz} />
        <Route path='/hypotenuse' component={Hypotenuse} />
        <Route path='/team' component={Teams} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  )
}

export default App
