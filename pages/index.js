import Head from 'next/head'
import Image from 'next/image'
import prisma from "../lib/prisma"
import MainSports from '../components/MainSports'
import DaySelector from '../components/DaySelector'
import MainFilter from '../components/MainFilter'
import Event from '../components/Event'

export default function Home({events}) {
  return (
    <>
        <div className='flex w-full rounded m-10 bg-white-100 mt-14 max-w-2xl shadow-md border'	>
          <MainSports />
          <div className='flex-col w-full'>
            <DaySelector />
            <MainFilter />
          <div className='flex-col justify-center bg-white-500 w-full px-5'>
     {events.map((event) => {

            return (
              
              // <div key={event.id} className=' flex-col'>
              //   <p className='flex-col'>{event.Eventor[0].title} vs {event.Eventor[0].title}</p>
                <Event key={event.id} event={event}/>
              // </div>

              
                
            )

        })}
        </div>
        </div>
      
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