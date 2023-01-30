import Head from 'next/head'
import Image from 'next/image'
import TextButton from '@/components/TextButton'


export default function Home() {
  return (
    <>
      <TextButton
        path="/explore">
        Explore
      </TextButton>
    </>
  )
}
