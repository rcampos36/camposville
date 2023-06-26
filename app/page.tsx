"use client"

import Banner from '@/components/banner';
import Ctacards from '@/components/ctacards';
import Aboutus from '@/components/aboutus';
import Ecofriendly from '@/components/ecofriendly';
import Testimonials from '@/components/testimonials';
import News from '@/components/news';
import Ctas from '@/components/ctas';
import { Container } from 'theme-ui';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Container>
        <Banner />
        <Ctacards />
        <Aboutus />
        <Testimonials />
        <Ecofriendly />
        <Ctas />
        <News />
      </Container>
    </main>
  )
}
