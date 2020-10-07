import React, {useState} from 'react'
import Month from '../Month/Month'
import './MonthList.css'

export default function MonthList() {
    let date = new Date();
    const [year, setYear] = useState(date.getFullYear());
    const [month, setMonth] = useState(date.getMonth());
    const day = date.getDate();

    const [showMonthTable, setShowMonthTable] = useState(false);
    const [showYearTable, setShowYearTable] = useState(false);

    const allmonths = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    var months = [];
    allmonths.map(data => {
       months.push(
            <td onClick={(e) => {setMonthHandle(data)}} key={data} className='month'>
                <span>{data}</span>
            </td>
        );
        return data;
    });

    let rows = [];
    let cells = [];
    months.forEach((row, i) => { 
        if (i % 3 !== 0 || i === 0) { // except zero index 
            cells.push(row); 
        } else { 
            rows.push(cells); 
            cells = [];
            cells.push(row); 
        };
    });
    rows.push(cells); // add last row
    let monthlist = rows.map((d, i) => {
        return <tr key={d+i}>{d}</tr>;
    });

    var allyears = [];
    for (var i=-2; i < 10; i++){
        allyears.push(year + i);
    };
    var years = [];
    allyears.map(data => {
        years.push(
             <td onClick={(e) => {setYearHandle(data)}} key={data} className='year'>
                 <span>{data}</span>
             </td>
         )
         return data;
     });

     let rowsYear = [];
     let cellsYear = [];
     years.forEach((row, i) => { 
         if (i % 3 !== 0 || i === 0) { // except zero index 
            cellsYear.push(row); 
         } else { 
            rowsYear.push(cellsYear); 
            cellsYear = [];
            cellsYear.push(row); 
         }
     });
     rowsYear.push(cellsYear); // add last row
     let yearlist = rowsYear.map((d, i) => {
         return <tr key={d+i}>{d}</tr>;
     });
 
   
    const setMonthHandle = (month) => {
        var monthNo = allmonths.indexOf(month);
        setMonth(monthNo);
        setShowMonthTable(!showMonthTable);
    };
    const setYearHandle = (year) => {
        var yearNo = allyears.indexOf(year);
        setYear(allyears[yearNo]);
        setShowYearTable(!showYearTable);
    };

    const changeShowMonthTableHandle = () => {
        setShowMonthTable(!showMonthTable);
        setShowYearTable(false);
    };

    const changeShowYearTableHandle = () => {
        setShowYearTable(!showYearTable);
        setShowMonthTable(false);
    };
    const onPrev = () => {
        month === 0 ? setMonth(11) : setMonth(month-1);
    };
    const onNext = () => {
        month > 10 ? setMonth(0) : setMonth(month+1);
    };


    return (
        <>  <div className='my-date'>
                <span onClick={() => {onPrev()}} className={'calendar-date'}><span className="calendar-button button-next"/> {"<"}  </span>
                <div onClick={() => changeShowMonthTableHandle()} className="calendar-date" colSpan="2">{allmonths[month]}</div>
                <div onClick={() => changeShowYearTableHandle()} className="calendar-date">{year}</div>
                <span onClick={() => {onNext()}} className={'calendar-date'}><span className="calendar-button button-next"/>{">"} </span>
            </div>
            <table className="calendar-month">
                <thead>
                    <tr>
                    {showMonthTable ? <th colSpan="4">Выберите месяц</th>: <th></th> }
                    {showYearTable ? <th colSpan="4">Выберите год</th>: <th></th> }
                    </tr>
                </thead>
                { showMonthTable ?<tbody> {monthlist} </tbody>: <tbody></tbody>}
                { showYearTable ?<tbody> {yearlist} </tbody>: <tbody></tbody>}
            </table>
            { (showMonthTable === false && showYearTable === false)  ? <Month year={year} month={month} day={day}  /> : ''}
        </>
    )
}
