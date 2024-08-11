import React from 'react'
import "./Style.css"
import ReactDOM from 'react-dom/client';
import Header from './Component/Header'
import Body from './Component/Body'
import About from './Component/About'
import Contact from './Component/Contact ';
import Error from './Component/Error';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
const App = () => {
  return (
    <  div className='app'>
    <Header/>
    <Outlet/>
    </ div>
  )
}
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{
      path:"/",
      element:<Body/>
    },
      {
path:"/about",
element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    ],
    errorElement:<Error/>
  }
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
export default App
