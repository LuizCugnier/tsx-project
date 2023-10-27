import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, CreatePost, PostPage, Login, CreateUser } from './pages'
import { Navbar } from './components'

import './App.css'

function App() {
  return (
    <div className="main-app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
