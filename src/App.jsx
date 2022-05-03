import { useState } from 'react'

import logo from './logo.svg'
import './App.css'
import Search from './compenents/Search'
import List from './compenents/List'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="App-main">
      <Search></Search>
      <List></List>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  )
}

export default App
