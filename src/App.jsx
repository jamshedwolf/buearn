import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Roadmap from './pages/Roadmap'
import Team from './pages/Team'
import About from './pages/About'
import Home from './pages/Home'
import Nav from './componenets/Nav'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Faqs from './pages/Faqs'
import "./assets/fonts/Brolink DEMO.otf";



function App() {

  return (
    <>
    <BrowserRouter>

    <Nav/>
<Routes>
       
       <Route  path='/' element={<Home/>}></Route>
       <Route  path='/about' element={ <About/>}></Route>
       <Route  path='/roadmap' element={<Roadmap/>}></Route>
       <Route  path='/team' element={   <Team/>}></Route>
        <Route  path='/faqs' element={   <Faqs/>}></Route> 
      
  
     
 
      

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
