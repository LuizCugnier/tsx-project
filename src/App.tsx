import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, CreatePost, PostPage } from './pages'
import { Navbar } from './components'

import './App.css'
import CreateUser from './pages/CreateUser/CreateUser'

function App() {
  return (
    <div className="main-app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/login" element={<div>Login</div>} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
