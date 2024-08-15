import React, { lazy,Suspense } from 'react'
import "./index.css"
import Header from './Component/Header'
import Body from './Component/Body'
import Contact from './Component/Contact ';
import Error from './Component/Error';
import { createBrowserRouter,Outlet } from 'react-router-dom'
import RestaurentMenu from './Component/RestaurentMenu';

const App = () => {
  return (
    <  div className='app'>
    <Header/>
    <Outlet/>
    </ div>
  )
}
const About= lazy(()=>import("./Component/About"))
// const Contact= lazy(()=>import("./Component/Contact"))

 export const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{
      path:"/",
      element:<Body/>
    },
      {
path:"/about",
element:<Suspense fallback={<h1>Loading.....</h1>}><About/></Suspense>
    },
    {
      path:"/contact",
      element:<Suspense fallback={<h1>Loading.....</h1>}><Contact/></Suspense>
    },
    {
      path:"/restaurent/:resId",
      element:<RestaurentMenu/>
    },
    
    ],
    errorElement:<Error/>
  }
])

export default App
