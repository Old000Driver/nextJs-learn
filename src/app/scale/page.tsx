import React from 'react'
import Hero from '@/components/hero'
import scaleSrc from '/public/images/scale.jpg'

export default function page() {
  return (
    <Hero imgUrl={scaleSrc} altText="scale" content="scale" />
  )
}
