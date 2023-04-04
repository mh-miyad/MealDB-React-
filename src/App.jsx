import React from 'react'

import NavbarCom from './Component/NavbarCom'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>

     <NavbarCom/>
     <div id="detail">
        <Outlet />
      </div>
    </div>
  )
}

export default App