import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
    title: "You can contact us with this number 0998877665",
    description: "We has our duty to make everyone of you become the good student",
    openGraph: {
        images : "https://th.bing.com/th/id/OIP.A_f7nhwsPd7ixxBfcIssFwHaE8?rs=1&pid=ImgDetMain"
    }
     
}

export default function page() {
  return (
    <div className='grid place-content-center text-6xl text-green-500'>
      Contact Us
    </div>
  )
}
