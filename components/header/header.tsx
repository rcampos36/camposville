"use client"

import React from 'react'
import { Container } from 'theme-ui';
import Logo from '@/components/logo';
import Navigation from '@/components/navigation';



export default function Header() {
  return (
    <header className='w-[1080px] max-md:w-full h-[100px] max-sm:px-10 px-20 mx-auto flex items-center flex-col pt-2' id="header">
        <Container className='flex items-center gap-20 justify-between'>
            <Logo />
            <Navigation />
        </Container>
    </header>
  )
}
