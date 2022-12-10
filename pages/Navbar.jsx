import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div style={{display:'flex',margin:'30px'}}>
        <Link href='/'>Blogs</Link>
        <Link href='/cards'>Cards</Link>
    </div>
  )
}

export default Navbar