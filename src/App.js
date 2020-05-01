import React, { Component } from 'react';
import Imgq from './imgq';
import ImageDetails from './ImageDetails';


import './App.css'


const apikey = "16320733-1d0bee63b63de51749a41ef3b"

class App extends Component{
  
  state = {
    images: []
  }

  handleGet =  async(event) => {
    event.preventDefault()
    const queries = event.target.searchvalue.value
    const url = `https://pixabay.com/api/?key=${apikey}&q=${queries}&image_type=photo`

    const req = await fetch(url)
    
    const resp = await req.json()
    this.setState({
      images:resp.hits
    })
    
  }

 

  render()
  {
    return(
      <div>
          <Imgq handleGet = {this.handleGet}></Imgq>
          <ImageDetails images = {this.state.images}/>
          
      </div>
      
    )
  }
}

export default App;
