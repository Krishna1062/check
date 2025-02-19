import Link from 'next/link'
import React from 'react'


const Nav = () => {
  return (
    <div className='bg-red-600 text-3xl'>
      tis is the nav bardd
<br />
    <Link href="/about">about</Link>
    <br />
    <Link href="/">home</Link>

    </div>
  )
}

export default Nav
