import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alerts from './components/Alerts';
import { useState } from 'react';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null)
  const [mystyle2, setmystyle2] = useState(true)
  const [togglebtn, settogglebtn] = useState(true)
  const [mystyle, setmystyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  }


  )
  const showalert = (msg, type) => {
    setalert(
      {
        msg: msg,
        type: type
      }
    )

    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const darkmode = () => {
    if (mystyle.color === 'white') {
      showalert("light mode has been enable", "success")
      setmystyle(

        {
          color: 'black',
          backgroundColor: 'white'
        }
      )
      document.body.style.backgroundColor = "white";
      setmystyle2(true)
      settogglebtn(true)
    }
    else {
      setmystyle({
        color: 'white',
        backgroundColor: 'black'
      }
      )
      showalert("dark mode has been enable", "success")
      document.body.style.backgroundColor = "black";

      setmystyle2(false)
      settogglebtn(false)
    }


  }



  return (
    <>

      <Router>

        <Navbar mystyle2={mystyle2} darkmode={darkmode} />
        <Alerts alert={alert} />
        <div className="container  my-5">



          <Switch>

            <Route path="/about" exact>
              <About mystyle={mystyle} darkmode={darkmode} togglebtn={togglebtn} />
            </Route>

            <Route path="/" exact>
              <TextForm mystyle={mystyle} showalert={showalert} heading="Enter your text here" />
            </Route>
          </Switch>



        </div>
      </Router>
    </>
  );
}

export default App;
