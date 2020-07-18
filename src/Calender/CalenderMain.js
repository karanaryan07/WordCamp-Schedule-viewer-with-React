import React from "react";
import {hot} from 'react-hot-loader/root'
import Calendar from "./Calender.js";
import './Calender.css'



class CalenderApp extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              react<b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar  data = {this.props.data}/>
        </main>
      </div>
    );
  }
}

export default hot(CalenderApp);