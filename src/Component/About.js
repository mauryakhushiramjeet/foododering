import React from 'react'
import User from './User'
import UserClass from './UserClass'
import "./About.css"
const About = () => {
  return (
    <div className='m-4 p-4 bg-gray-100 rounded-lg'>
      <h1>about</h1>
      this is my About router
    
      <User name={"maurya khushi ramjeet( functional)"}/>
      <UserClass name={"maurya khushi ramjeet( class based)"}/>
      
    </div>
  )
}

export default About
