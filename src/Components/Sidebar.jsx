import React from 'react'
import Navbar from './NavLinks'
import NavButtons from './NavButtons'

function Sidebar({open,openSidebar}) {
  return (
   <div className={`p-4 d-flex flex-column align-items-start justify-content-between position-fixed top-0 end-0`} style={{ gap:"2rem", width:"16rem", height:"100%",zIndex:"100",backgroundColor:"rgba(255,255,255,0.8)",backdropFilter:"blur(12px)", transform :`${open ? "translateX(0rem)" :"translateX(20rem)" }`,transition:"ease-in-out .5s"}} >
      <div>
      <button className='btn btn-close me-5 mb-5' onClick={()=>openSidebar(false)}></button>
        <Navbar {...{open,openSidebar}}/>
      </div>
      <div>
        <NavButtons/>
      </div>
      
   </div>
  )
}

export default Sidebar