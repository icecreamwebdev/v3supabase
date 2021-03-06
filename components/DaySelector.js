import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import Day from '../components/Day'
import Router from 'next/router';

const DaySelector = () => {

    const nextDays = [{day: 'Today', date: '19 JAN'},{day: 'Fri', date: '20 JAN'},{day: 'Sat', date: '22 JAN'},{day: 'Sun', date: '23 JAN'},{day: 'mon', date: '24 JAN'},{day: 'tues', date: '25 JAN'},{day: 'wed', date: '26 JAN'}]
    const [activeDay, setActiveDay] = useState(0)

    const calendarIcon = <FontAwesomeIcon icon={faCalendarAlt} size="2x" color="#334155" />

    const dayToggle = (day) => {

        
        setActiveDay(day);
        Router.push(`/#${day}`)
        console.log('it worked', day)
    }

    return (
        <div className='flex w-full bg-gray-200 h-20 shadow-lg justify-around items-center text-gray-900 text-sm  '>
            {nextDays.map((day, index) => {

                return <Day key={index} day={day.day} date={day.date} index={index} activeDay={activeDay} handleFunction={dayToggle}/>

            })}
            <button className='flex-col'><div className='flex justify-center'>{calendarIcon}</div></button>
        </div>

    );
};

export default DaySelector;