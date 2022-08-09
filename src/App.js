import React from 'react'
import { Route, Routes } from 'react-router-dom' // we use this Route between home page and exercises ditels page
import { Box } from '@mui/system' // Box is essential div with some shading and colors (material UI)

import './App.css'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto"> {/*responsive on large screen devices*/}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
      </Routes>
      <Footer />
    </Box>
  )
}

export default App