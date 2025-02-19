import Nav from '@/components/nav'
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: 'about pagetite',
    description: 'Wthe best aboutof the is waorldsite',
  };


const page = () => {
  return (
    <div>
<Nav/>
<h1 className='text-blue-600'>thi sis about</h1>
<Link href="/">homet</Link>
    </div>
  )
}

export default page
