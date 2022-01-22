import Head from 'next/head'
import Image from 'next/image'
import prisma from "../lib/prisma"
import MainSports from '../components/MainSports'
import DaySelector from '../components/DaySelector'

export default function Home({events}) {
  return (
    <>
        <div className='flex w-full rounded m-10 bg-white-100 mt-14 max-w-screen-xl shadow-md border'	>
          <MainSports />
          <div className='flex-col w-full'>
            <DaySelector />
            <div className='flex-col w-full bg-gray-100 h-10 '></div>
          <div className='flex-col justify-center bg-white-500 w-full p-5'>
     {events.map((event) => {

            return (
              
              <div key={event.id} className=' flex-col'>
                <p className='flex-col'>{event.Eventor[0].title} vs {event.Eventor[0].title}</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
                <p>Manchester United vs Rangers F.C</p>
              </div>

              
                
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