import { Metadata } from 'next'
import { getPayloadClient } from '@/payload/payload'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  const payload = await getPayloadClient()

  return (
    <>
      <h1>Lorem ipsum dolor sit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi officia necessitatibus sit dignissimos ea in sint dolorum, quae vel
        id cupiditate exercitationem explicabo dicta ipsum, velit labore reiciendis inventore officiis.
      </p>
    </>
  )
}
