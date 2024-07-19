import { useState } from 'react';
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blog from './pages/suugaan';
import CreateBlogs from './pages/CreateBlogs';
import Hiddaha from './pages/Hiddaha';
function App()  {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Blog' element={<Blog/>}></Route>
          <Route path='Create' element={<CreateBlogs/>}></Route>
          <Route path='/Hiddaha' element={<Hiddaha/>}></Route>


          </Route>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
