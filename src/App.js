import React from 'react';
import './App.css';
import Hello from './Hello'
import Hi from './Waqas'
import './bootcamp.css' 
function App({name, age, firstName, Lastname}) {
  return (
    <div >
      <h2 className="divmain">
        BootCamp200
      </h2>
      <p className="divmain">
        This BootCamp 2020 was started by Sir Zia Khan in May 2020. The only Purpsoe of this BootCamp is to prepare international level developer from allover the <strong>Pakistan</strong>
        . This BootCamp is Hosted by:
        <strong>
        <ul>
          <li> Sir Zia Khan</li>
          <li>Sir Zeeshan Hanif</li>
          <li>Sir AdilAltaf</li>
          <li>Sir Daniyal </li>
          <li>Ms Hira Khan</li> 
          </ul></strong>
      </p>
      <Hello> </Hello> 
      <Hi> </Hi>

    </div>
  );
  
}


export default App;
