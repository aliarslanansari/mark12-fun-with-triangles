import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import IsTriangle from './pages/IsTriangle'
import Hypotenuse from './pages/Hypotenuse'
import AreaOfTriangle from './pages/AreaOfTriangle'
import Quiz from './pages/Quiz'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Quiz} />
        <Route path='/about' component={IsTriangle} />
        <Route path='/hypotenuse' component={Hypotenuse} />
        <Route path='/team' component={AreaOfTriangle} />
      </Switch>
    </Router>
  )
}

export default App
