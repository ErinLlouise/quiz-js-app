import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import './App.css'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/quiz/:id' component={Quiz} />
    </div>
  );
}

export default App;
