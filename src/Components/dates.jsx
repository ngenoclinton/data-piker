import { deAT } from "date-fns/locale";
import React, { useEffect, useState } from "react";

//styles css 
import './dates.css'
function Dates() {
    const defaultDateFields = {        
        checkIn: " ",
        CheckOut: " ",        
    }
    const [dates, setDate] = useState(defaultDateFields);
    const {checkIn, checkOut} = dates; 
    
    console.log( checkIn);
    console.log( checkOut   );
        
        // const values = [] = checkIn.split("/");
        // let day = parseInt(values[0]);
        // let month = parseInt(values[1]);
        // let year = parseInt(values[2]);
        // console.log(day);
        // console.log(month);
        // console.log(year);

   useEffect(()=>{
      setDate(("yyyy-MM-dd"))
   }, [])

    function handleChange(eve){
        const {name, value} = eve.target;
        setDate({[name]:value});
        // const {value} = eve.target;
        // setDate(value);
    }

    return(
        <div className="container">
            <label>Check-In Date:{checkIn}</label>
            <input type="date"  value={checkIn} name="checkIn" max="" onChange={handleChange}></input>
            <label>Check-Out Date:{checkOut}</label>
            <input type="date"  value={checkOut} name="checkOut"  min="" onChange={handleChange}></input>
        </div>
    )
}


export default Dates;
