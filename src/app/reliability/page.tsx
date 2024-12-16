import React from 'react'
import Hero from '@/components/hero'
import reliabilitySrc from '/public/images/reliability.jpg'

export const metadata = {
  title: "Reliability",
};
export default function page() {
  return (
    <Hero imgUrl={reliabilitySrc} altText="reliability" content="reliability" />
  )
}
