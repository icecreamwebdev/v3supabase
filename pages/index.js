import Head from 'next/head'
import Image from 'next/image'
import prisma from "../lib/prisma"

export default function Home({events}) {
  return (
    <>
    <h1 className='text-green-500 flex justify-center'> Supabase project</h1>
    <div>
    
     {events.map((event) => {

            return (
              <div key={event.id}>
                <p>{event.Eventor[0].title} vs {event.Eventor[0].title}</p>
                <p>test</p>
              </div>
            )

        })}

      
      </div>
      </>
  )
}

export async function getStaticProps(){

  const data = await prisma.event.findMany({
    include: {
    Eventor: {
      select: {
        title: true,
        eID: true
      }, // Return all fields
  },}
})

  const newEvents = JSON.parse(JSON.stringify(data))

   return {
    
      props: {
    
        events: newEvents
      }
    
    
    }

}