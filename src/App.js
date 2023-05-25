import React from 'react'
import {createBrowserRouter,Route,RouterProvider, createRoutesFromElements} from 'react-router-dom'
import Layout from './layout/Layout'
import Dashboard from './componets/Dashboard'
import Cart from './componets/Cart'

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
        <Route index element={<Dashboard />}/>
        <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ))
  return (
   <>
      <div className='App'>
          <RouterProvider router={router}/>
      </div>
   </>
  )
}

export default App