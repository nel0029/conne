import Head from 'next/head'
import Image from 'next/image'
import TextButton from '@/components/TextButton'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

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
