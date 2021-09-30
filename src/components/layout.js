import * as React from 'react'
import  Navbar  from './Navbar'

const Layout = ({children}) => {
  return (
    <div>
    <Navbar/>
    <main>
      {children}
    </main>
    <footer>
      <p>CopyRight 2021  N. H. </p>
    </footer>
    </div>
  )}

  export default Layout;
