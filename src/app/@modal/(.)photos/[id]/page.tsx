'use client'
import React from 'react'
import { photos } from '@/data'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { id: string }}) {
  const photo = photos.find(item => item.id === params.id)!
  const router = useRouter()
  return (
    <div className='flex justify-center items-center fixed inset-0 bg-gray-500/[.8]' onClick={router.back}>
      <Image src={photo.src} width={300} height={300} alt={photo.alt} className='rounded-lg' onClick={e => e.stopPropagation()}/>
    </div>
  )
}
