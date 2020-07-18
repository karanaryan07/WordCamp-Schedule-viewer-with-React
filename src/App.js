
import React from "react";
import { hot } from 'react-hot-loader/root';
import Navbar from 'react-bootstrap/Navbar'
import Button from '@material-ui/core/Button';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './TopBar/Nav.js'
import CalenderApp from './Calender/CalenderMain.js'

function setHourstoZero(api_time)
{
    let time = new Date(api_time);
    time.setHours(0,0,0,0);
    return time;
}

class App extends React.Component {

  constructor(props)
  {
      super(props)
      this.state = {
          data : {}
      }
  }


componentDidMount() 
{
      
      let storage = []
       fetch('https://central.wordcamp.org/wp-json/wp/v2/wordcamps')
      .then(res =>res.json())
      .then(datas => datas.map(data => {
        storage[setHourstoZero(data.modified_gmt)] = data
      }))

      storage !== [] && this.setState({data : storage})
  }

  render() {
    console.log("api data" , this.state.data)
    return (
      <>
      <NavBar />
      {this.state.data !== {} ? <CalenderApp data = {this.state.data}/> : null}
      </>
    );
  }
}

export default hot(App);
