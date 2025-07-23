import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { RootLayout } from '@/components/RootLayout'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-accent-orange py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Mission"
        title="To empower local bike shops and riders alike."
        invert
      >
        <p>
          We're here to bridge the gap between motorcycle owners and the skilled,
          local mechanics who keep their bikes running perfectly.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="For Riders" invert>
            We provide a transparent, easy-to-use platform to find, book, and
            manage bike repairs without the usual hassle.
          </GridListItem>
          <GridListItem title="For Garages" invert>
            We offer a powerful tool to streamline operations, manage bookings,
            and connect with a wider community of motorcycle enthusiasts.
          </GridListItem>
          <GridListItem title="For the Community" invert>
            By supporting local businesses, we help keep the passion for
            motorcycles alive and thriving in every neighborhood.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe in the power of community and the passion of the ride.',
}

export default async function About() {
  return (
    <RootLayout>
      <PageIntro eyebrow="About us" title="For the love of the ride.">
        <p>
          We’re a team of motorcycle enthusiasts and tech lovers who got tired
          of the old-fashioned way of getting our bikes serviced. We knew there
          had to be a better way than endless phone calls and uncertain
          quotes.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            That’s why we created BikeLink: a simple, powerful platform to
            connect riders with trusted local garages. We believe that booking
            a bike repair should be as easy as ordering a pizza.
          </p>
          <p>
            Our goal is to support the local workshops that are the backbone of
            the motorcycle community, while giving riders the convenience and
            peace of mind they deserve. We're not just building an app; we're
            building a community.
          </p>
        </div>
      </PageIntro>

      <Culture />
    </RootLayout>
  )
}
