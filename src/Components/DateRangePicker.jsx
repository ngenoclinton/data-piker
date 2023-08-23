
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { DateRangePicker } from 'react-date-range';
 import { format } from 'date-fns';
 import { addDays } from 'date-fns';
 
//styles
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function DateRangesPicker() {
  // date state
  const [range, setRange] = useState([
    {
        startDate: new Date(),
        endDate:addDays(new Date(), 7),
        key: 'selection'
      }
  ]);
  
  //open  and close
  const [open, setOpen] = useState(false);
  //get the target element to toggle 
  const refOne = useRef(null);

  //useEffect
  useEffect(()=>{
      //set current date on component load
      //setRange(format(new Date(), 'MM-dd-yyyy'))
      document.addEventListener("keydown", hideOnEscape, true);
      document.addEventListener("click", hideOnClickOutside, true);
      
  }, []);
   
 //hide calendar on pressing escape key 
 const hideOnEscape =(e)=>{
  //console.log(e.key);
  if(e.key === "Escape"){
    setOpen(false);
  }
 }

 //hide calender on clicking outside 
 const  hideOnClickOutside =(e) =>{
    // console.log(refOne.current);
    // console.log(e.target);
    //setOpen(false);
    if(refOne.current && !refOne.current.contains(e.target)){
        setOpen(false);
    }
 }
 //function to handle date selection 
  
  return (
    <div className="calenderWrap">
    <span className='select' > select date range</span>
    <h2>Date Range:</h2>
    
    <input 
    value={
        `${format(range[0].startDate,  'MM/dd/yyyy')} to ${format(range[0].endDate, 'MM/dd/yyyy')}`} 
            readOnly 
            className="inputBox" 
            onClick={()=>{setOpen(open => !open)}}
            onChange={(e)=>setRange(e.target.value)}
      />
      
      <div ref={refOne}>
        {open && <DateRangePicker           
              onChange={item => setRange([item.selection])}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={range}
              month={2}
              direction="horizontal"
              className ="calenderElement"
              />}
      </div>
    
    </div>
  );
}

export default DateRangesPicker;