import React, { useState } from "react";
import DatePicker from '@amir04lm26/react-modern-calendar-date-picker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import '@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css';

const DaySelectoTry = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const calendarIcon = <FontAwesomeIcon icon={faCalendarAlt} size="2x" color="#334155" />

    const [calendarView, setCalendarView] = useState(false)

    const toggleHandler = () => {
        setCalendarView(() => !calendarView)
    }
    // render regular HTML input element
    const renderCustomInput = ({ ref }) => (
        <button className='flex-col shrink-0 sticky' ref={ref}><div className='flex justify-center'>{calendarIcon}</div></button>
    )
  
    return (
      <DatePicker
        value={selectedDay}
        onChange={setSelectedDay}
        renderInput={renderCustomInput} // render a custom input
        shouldHighlightWeekends
        onClick={toggleHandler}
      />
    );
  };


export default DaySelectoTry;