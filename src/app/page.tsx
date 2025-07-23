import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'


import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import imageBike2 from '@/images/bike2.png'
import { RootLayout } from '@/components/RootLayout'

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Features"
        title="Everything you need to manage your bike repairs, seamlessly."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          BikeLink connects you with trusted local garages, letting you book
          repairs, get quotes, and track progress in real-time.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageBike2}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="For Riders">
              Save your bikes by VIN, discover local shops on a map, compare
              garages, get real-time quotes, and book instantly.
            </ListItem>
            <ListItem title="For Shops">
              A powerful dashboard with Kanban-style job management to
              streamline your workflow and customer handling.
            </ListItem>
            <ListItem title="Live Tracking">
              No more guessing. Track the status of your bike's repair from
              start to finish with live updates.
            </ListItem>
            <ListItem title="Future-Proof">
              We're already working on integrations with major parts suppliers
              to make quoting even easier for garages.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'BikeLink is a mobile-first platform that connects motorcycle owners with trusted local garages.',
}

export default async function Home() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-accent-orange sm:text-7xl">
            Powering Local Bike Repair. Seamlessly.
          </h1>
          <p className="mt-6 text-xl text-accent-orange">
            The easiest way to connect with trusted local mechanics. Find, book,
            and track your motorcycle repairs all in one place. App launching
            soon — stay tuned!
          </p>
        </FadeIn>
      </Container>

      <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
        <Container>
          <FadeIn className="flex items-center gap-x-8">
            <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
              Trusted by riders. Built with mechanics.
            </h2>
            <div className="h-px flex-auto bg-neutral-800" />
          </FadeIn>
          <FadeInStagger className="mt-10" faster>
            <div className="mx-auto max-w-4xl">
              <p className="text-lg text-neutral-300 text-center">
                BikeLink was developed in close collaboration with real garages and riders across the UK. From busy city shops to independent mechanics, we listened to their needs to build a platform that truly works. That's why top-rated garages are already signing up before launch.
              </p>
            </div>
          </FadeInStagger>
        </Container>
      </div>

      <Services />

      <div className="relative isolate mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              We're Almost There
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              We're putting the final touches on something that's going to change the way riders and mechanics connect.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="https://x.com/bikelinkapp"
                className="rounded-md bg-accent-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-orange"
              >
                Follow on Twitter
              </Link>
              <Link
                href="https://instagram.com/bikelinkapp"
                className="text-sm font-semibold leading-6 text-neutral-900 hover:text-accent-orange"
              >
                Follow on Instagram <span aria-hidden="true">→</span>
              </Link>
            </div>
            <p className="mt-6 text-sm text-neutral-500">
              Be the first to know when we launch
            </p>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}
