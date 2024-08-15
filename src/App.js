import React, { lazy,Suspense, useState } from 'react'
import "./index.css"
import Header from './Component/Header'
import Body from './Component/Body'
import Contact from './Component/Contact ';
import Error from './Component/Error';
import { createBrowserRouter,Outlet } from 'react-router-dom'
import RestaurentMenu from './Component/RestaurentMenu';
import UserContex from './Component/UserContex';

const App = () => {
  const[UserName,setUserName]=useState();
useState(()=>{
const data={
  name:"maurya khushi"
}
setUserName(data.name)
},[]);
  return (
<UserContex.Provider value={{logdenUser:UserName,setUserName}}>
<  div className='app'>
    <Header/>
    <Outlet/>
    </ div>
</UserContex.Provider>
   
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
