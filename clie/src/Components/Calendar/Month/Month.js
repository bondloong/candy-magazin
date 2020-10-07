import React from 'react'
import '../Calendar.css'

export default function Month({year, month, day}) {
  
  const weekdaysShort = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
  const weekDaysShortName = weekdaysShort.map (shortDay => {
          return <th key={shortDay}>{shortDay}</th>
  })

  const myDate = new Date(year, month, day)
  const firstDayOfMonth = myDate.getDay()
  const currentDay = myDate.getDate();


  let blanks = [];
  for (let i = 0; i < firstDayOfMonth-1; i++) {
    blanks.push(
      <td key={day + i} className="calendar-day empty">{""}</td>
    );
  }

  const allDaysInMonth = 32 - new Date(year, month, 32).getDate(); 
  var daysInMonth = [];
  for (var d = 1; d <= allDaysInMonth ; d++) {
    var yourCurrentDay = d === currentDay && month === new Date().getMonth() && year === new Date().getFullYear() ? "today" : "";
    daysInMonth.push(
      <td key={d} className={`calendar-day ${yourCurrentDay}`}>
        {d}
      </td>
    );
  }


  var totalSlots = [...blanks, ...daysInMonth];
  var rows = [];
  var cells = [];

  totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row); // if index not equal 7 that means not go to next week
      } else {
        rows.push(cells); // when reach next week we contain all td in last week to rows 
        cells = []; // empty container 
        cells.push(row); // in current loop we still push current row to new container
      }
      if (i === totalSlots.length - 1) { // when end loop we add remain date
        rows.push(cells);
      }
  });

  let daysinmonth = rows.map((d, i) => {
      return <tr key={d+i}>{d}</tr>;
  });


  return (
      <table className="calendar-day">
          <thead>
            <tr>{weekDaysShortName}</tr>
          </thead>
          <tbody>
              {daysinmonth}
          </tbody>
      </table>
  )
}
