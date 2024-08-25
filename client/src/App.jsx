import { useState } from 'react'
import './App.css'
import LoginBasic from './components/login/LoginBasic'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import Selector from './components/Selector'
import CreatePost from './components/Post Area/CreatePost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<LoginBasic/>}/>
        <Route path="/createpost" element={<CreatePost/>}/>
      </Routes>
    </>
  )
}

export default App
