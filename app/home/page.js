import Nav from '@/components/nav'
import Link from 'next/link';
import React from 'react'


export const metadata = {
    title: 'Home  Website',
    description: 'Welcome me page of my awesome website',
  };

const page = () => {
  return (
    <div>
<Nav/>
<h1>thi sis home</h1>
<Link href="/about">about</Link>
    </div>
  )
}

export default page
