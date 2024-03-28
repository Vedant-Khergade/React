
import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes}//Switch can be replaced by Routes in version 6
  from "react-router-dom";

 
  





import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextArea from './Components/TextArea';
//import { Router } from 'react-router-dom';
import Accordian from './Components/Accordian';
import Description from './Components/Description';


function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const getAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type

    })


  }

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#464344";
      getAlert("Enable dark mode", "success");


      setTimeout(() => {

        setAlert(null);
      }, 1500);

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      getAlert("Enable light mode", "success");

      setTimeout(() => {

        setAlert(null);
      }, 1500);

    }
  }
  return (

    <>
      <Router>

        <Navbar Heading="TextUtil" Home="Home" mode2={mode} toogleMode={toogleMode} />

        <Alert Art={alert}></Alert>
        <Routes>
        

          <Route exact path="/home" element={<TextArea mode2={mode} Heading2="Enter Text" getArt={getAlert} />} />
          
          <Route exact path="/about" element={<Accordian mode={mode} />} />

          <Route exact path="/description" element={<Description des="This is text util" mode1={mode}  />} />


        </Routes>

      </Router>

    </>

  );
}

export default App;
