import React, { useState } from 'react';
import './App.css';
import Land from './components/LandPage';
import Navi from './components/Navi';
import ExmyCar1 from './components/mainCarousel';
import ExmyJumbo1 from './components/myJumbo';
import { MAIN } from './shared/mainLand';
import { BrowserRouter } from 'react-router-dom';



  
class App extends React.Component {
  constructor(props){

      super(props);

      
    
      this.state = {
        
        main: MAIN
      }
    };

  render(){
    
    return (
      
          <div dark>
            <Navi /> 
            <ExmyJumbo1 />     
            <ExmyCar1 />  
                        
          </div>   
           
  );
}
}
export default App;
