import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "This is the Metadata in About Us page",
  description: "We are Love next js",
};

export default function page() {
  return (
    <div className='grid place-content-center text-green-300 text-6xl'>
      About Page
    </div>
  )
}
