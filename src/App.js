
import React from "react";
import { hot } from 'react-hot-loader/root';
import Navbar from 'react-bootstrap/Navbar'
import Button from '@material-ui/core/Button';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './TopBar/Nav.js'
import CalenderApp from './Calender/CalenderMain.js'

class App extends React.Component {

  constructor(props)
  {
      super(props)
      this.state = {
          data : []
      }
  }

  componentDidMount()
  {
      fetch('https://central.wordcamp.org/wp-json/wp/v2/wordcamps')
      .then(res => res.json())
      .then(data => this.setState({data : data} , () => {console.log("res" , this.state.data)}))
  }

  render() {
    return (
      <>
      <NavBar />
      <CalenderApp />
      </>
    );
  }
}

export default hot(App);
