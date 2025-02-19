import Nav from '@/components/nav'
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: 'con pagetite',
    description: 'Wthe bdfdfdfest aboutof the is waorldsite',
  };


const page = () => {
  return (
    <div>
<Nav/>
<h1 className='text-pink-600'>thi sis coon</h1>
<Link href="/">ffff</Link><br />
<Link href="/about">about</Link>
    </div>
  )
}

export default page
