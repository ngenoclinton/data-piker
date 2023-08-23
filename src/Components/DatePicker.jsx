
import React from 'react';
import { useState, useEffect, useRef } from 'react';

import { Calendar } from 'react-date-range';
 import { format } from 'date-fns';
 
//styles
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function Calender() {
  
  // date state
  const [calendar, setCalender] = useState("");
  
  //open  and close
  const [open, setOpen] = useState(false);
  //get the target element to toggle 
  const refOne = useRef(null);

  //useEffect
  useEffect(()=>{
      //set current date on component load
      setCalender(('MM DD YYYY'))
      document.addEventListener("keydown", hideOnEscape, true);
      document.addEventListener("click", hideOnClickOutside, true);
      
  }, []);
   
 //hide calendar on pressing escape key 
 const hideOnEscape =(e)=>{
  console.log(e.key);
  if(e.key === "Escape"){
    setOpen(false);
  }
 }

 //hide calender on clicking outside 
 const  hideOnClickOutside =(e) =>{
    // console.log(refOne.current);
    // console.log(e.target);
    if(refOne.current && !refOne.current.contains(e.target)){
        setOpen(false);
    }
 }
 //function to handle date selection 
  const handleSelect =(date) => {
        console.log(format(date, 'MM/dd/yyyy'));
        setCalender(format(date, 'MM/dd/yyyy'));
      }
  
  return (
    <div className="calenderWrap">
    <span className='select' > select date</span>
    <h5>Calendar:{calendar}</h5>

    <input 
    value={calendar} 
    readOnly 
    className="inputBox" 
      onClick={()=>{setOpen(open => !open)}}
      onChange={(e)=>setCalender(e.target.value)}
      />
      
      <div ref={refOne}>
        {open && <Calendar 
              date= {new Date()}
              onChange = {handleSelect}
              className ="calenderElement"/>}
      </div>
    
    </div>
  );
}

export default Calender;