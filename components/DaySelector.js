import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import Day from '../components/Day'
import Router from 'next/router';
import ReactDatePicker from 'react-datepicker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from 'react';

const DaySelector = () => {

    const [windowSize, setWindowSize] = useState(undefined)

    useEffect(() => {
    
      if (typeof window !== 'undefined'){
        function handleResize() {
    
          setWindowSize(window.innerWidth)
    
        }
    
        window.addEventListener('resize', handleResize)
    
        handleResize()
    
        return () => window.removeEventListener('resize', handleResize)
      }
    
    
    
    }, [])
    
    console.log(windowSize)

    const nextDays = [{day: 'Today', date: '19 JAN'},{day: 'Fri', date: '20 JAN'},{day: 'Sat', date: '22 JAN'},{day: 'Sun', date: '23 JAN'},{day: 'mon', date: '24 JAN'},{day: 'tues', date: '25 JAN'},{day: 'wed', date: '26 JAN'}]
    const [activeDay, setActiveDay] = useState(0)

    const calendarIcon = <FontAwesomeIcon icon={faCalendarAlt} size="2x" color="#334155" />
    const [calanderOpen, setCalandarOpen] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    const DateButton = forwardRef(({ value, onClick }, ref) => (
        
      <button className="date-button" onClick={onClick} ref={ref}>
        {calendarIcon}
      </button>
    ));

    DateButton.displayName = "Search";


 
    const dayToggle = (day) => {

        
        Router.push(`/#${day}`, { shallow: true })
        setActiveDay(day);
        console.log('it worked', day)
    }

     const toggleCalandar = () =>{
     
        if (calanderOpen){
        setCalandarOpen(() => false)
        }
     }

     const handleCalendarClose = () => {
         setCalandarOpen(false)
     }

     const handleCalendarOpen = () => {
        setCalandarOpen(true)
    }
 
    const dateHandler = (date) => {
        Router.push(`/#${date}`)
    }
    
   
    return (
        <div className='flex w-full bg-gray-200 h-20 shadow-lg justify-around items-center text-gray-900 text-sm  '>
            {nextDays.map((day, index) => {

                return <Day key={index} day={day.day} date={day.date} index={index} activeDay={activeDay} handleFunction={dayToggle}/>

            })}
            {/* <button className='flex-col shrink-0 sticky' ><div className='flex justify-center'>{calendarIcon}</div></button> */}
           <div className='flex'>
            <DatePicker
                onCalendarClose={handleCalendarClose}
                onCalendarOpen={handleCalendarOpen}
                onInputClick={() => toggleCalandar()}
                closeOnScroll={true}
                selected={startDate}
                onChange={(date) => dateHandler(date)}
                customInput={<DateButton />}
                openToDate={startDate}
                minDate={new Date()}
                open={calanderOpen}
                popperPlacement="bottom-start"
    popperModifiers={{
        flip: {
            behavior: ["bottom-start"] // don't allow it to flip to be above
        },
        preventOverflow: {
            enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
        },
        hide: {
            enabled: false // turn off since needs preventOverflow to be enabled
        }
    }}
    //   maxDate={addMonths()}
                
    />
    </div>
        </div>

         

    );
};

export default DaySelector;