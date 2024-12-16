import React from 'react'
import Hero from '@/components/hero'
import performanceSrc from '/public/images/performance.jpg'

export const metadata = {
  title: "Performance",
};
export default function page() {
  return (
    <Hero imgUrl={performanceSrc} altText="performance" content="performance" />
  )
}
