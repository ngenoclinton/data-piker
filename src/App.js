import './App.css';
import React from 'react';
import Calender from './Components/DatePicker';
import DateRanges  from './Components/DateRange';
import DateRangesPicker from './Components/DateRangePicker';
import Dates from './Components/dates';

function App() {
  return (
    <>
<div className="App">
      <div className='calender-conatiner'>
      <hr></hr>
      <h3>React Date range Select</h3>
        <Calender />
      </div>
      <hr></hr>
      <div className='calender-conatiner'>
      <hr></hr>
      <h3>React Date range Select</h3>
        <DateRanges />
      </div>
      <hr></hr>
      <div className='calender-conatiner'>
      <hr></hr>
      <h3>React Date range Select</h3>
        <DateRangesPicker />
      </div>
      <hr></hr>
  </div>
    <div className='date-container'>
      <h3>Dates</h3>
      <Dates />
      </div>
      <hr></hr>
    </>
    
      
  );
}

export default App;
