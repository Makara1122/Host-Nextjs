import CardProduct from '@/components/CardProduct'
import { Metadata } from 'next';

import React from 'react'
export const metadata: Metadata = {
  title: "This is Metadata in Service Page",
  description: "Service Metadata",
};
export default function page() {
  return (
    <div>
     
      <CardProduct/>
    </div>
  )
}
