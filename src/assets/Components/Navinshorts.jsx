import React from 'react'
import  './Navinshort.css'



import Hamburger from "./Hamburger"


const Navinshorts = ({setcategory}) => {
  return (
    <div className='nav'>
   <div className="icon">
 <Hamburger setcategory={setcategory}/>
   </div>
   <img style={{
    cursor:'pointer',
    paddingBottom:10,
    paddingTop:10
   }
   } src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_IkHK7TNZCi5secXFvLZbD6tjPTKkXxJ8Yg&s" alt="inshort" height="90%"/>
    </div>
  )
}

export default Navinshorts
