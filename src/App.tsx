import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useAuth } from './components/AuthProvider'
import Navbar from './components/navbar/navbar'
import RequiredAuth from './components/RequiredAuth'
import AboutPage from './pages/about/about'
import HomePage from './pages/home/home'
import LoginPage from './pages/login/login'

const App: React.FC = () => {
  const { auth } = useAuth()
  return (
    <div className="App">
      {auth ? <Navbar /> : null}
      <Routes>
        <Route
          path="/*"
          element={
            <RequiredAuth>
              <PrivateRoute />
            </RequiredAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </div>
  )
}

const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}

export default App
