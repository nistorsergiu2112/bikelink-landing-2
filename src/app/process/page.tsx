import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageBookConfirmed from '@/images/book-confirmed.png'
import imageSelectReason from '@/images/select-reason.png'
import imageShowcase from '@/images/showcase-main-app.png'
import { RootLayout } from '@/components/RootLayout'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-accent-orange after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-primary-navy-blue sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Find() {
  return (
    <Section title="Find" image={{ src: imageShowcase }}>
      <div className="space-y-6 text-base text-secondary-gray">
        <p>
          No more endlessly searching for a reliable mechanic. With BikeLink,
          you can instantly{' '}
          <strong className="font-semibold text-primary-navy-blue">
            discover
          </strong>{' '}
          trusted garages in your area using our map-based interface.
        </p>
        <p>
          Filter your search by services offered, distance, or user ratings to
          find the perfect fit for your bike&apos;s needs. We&apos;re all about connecting
          you with the right people, right away.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-primary-navy-blue">
        Key features
      </h3>
      <TagList className="mt-4">
        <TagListItem>Map-based search</TagListItem>
        <TagListItem>Advanced filtering</TagListItem>
        <TagListItem>Verified garage profiles</TagListItem>
        <TagListItem>User reviews & ratings</TagListItem>
      </TagList>
    </Section>
  )
}

function Book() {
  return (
    <Section title="Book" image={{ src: imageSelectReason, shape: 1 }}>
      <div className="space-y-6 text-base text-secondary-gray">
        <p>
          Once you&apos;ve found the right garage, getting a quote and booking your
          service is just a few taps away. Submit your bike&apos;s details and the
          services you need, and receive a{' '}
          <strong className="font-semibold text-primary-navy-blue">
            real-time quote
          </strong>
          .
        </p>
        <p>
          Accept the quote to instantly book your appointment. No phone calls,
          no waiting for email responses. Just a simple, streamlined process
          that puts you in control.
        </p>
      </div>

      <Blockquote
        author={{ name: 'A Happy Rider', role: 'Future BikeLink User' }}
        className="mt-12"
      >
        Finally, a way to book a service without the back-and-forth. This is
        going to be a game-changer!
      </Blockquote>
    </Section>
  )
}

function Ride() {
  return (
    <Section title="Ride" image={{ src: imageBookConfirmed, shape: 2 }}>
      <div className="space-y-6 text-base text-secondary-gray">
        <p>
          We believe in transparency. That&apos;s why BikeLink provides{' '}
          <strong className="font-semibold text-primary-navy-blue">
            live tracking
          </strong>{' '}
          of your bike&apos;s service status.
        </p>
        <p>
          From the moment you drop off your keys to the second your bike is
          ready for collection, you&apos;ll be kept in the loop. Once the job is
          done, you&apos;ll get a notification, and you can get back to what matters
          most: the ride.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-primary-navy-blue">
        What you get
      </h3>
      <List className="mt-8">
        <ListItem title="Real-time Status Updates">
          Follow your bike's journey through the workshop with our Kanban-style
          service tracker.
        </ListItem>
        <ListItem title="In-app Communication">
          Easily communicate with the garage for any questions or updates.
        </ListItem>
        <ListItem title="Secure Payments">
          Pay for your service securely in the app once the work is complete.
        </ListItem>
      </List>
    </Section>
  )
}

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'Find, book, and ride. It’s that simple. Discover how BikeLink is revolutionizing motorcycle repairs.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="How It Works" title="Find. Book. Ride.">
        <p>
          We&apos;ve simplified the entire process of motorcycle maintenance.
          Here’s how you can get your bike serviced in just a few simple steps.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Find />
        <Book />
        <Ride />
      </div>
    </RootLayout>
  )
}
