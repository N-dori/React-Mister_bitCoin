import { Home } from './pages/Home';
import { ContactPage } from './pages/ContactPage';
import './assets/scss/main.scss';

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    selectedRoute:'home',
   
  }
  changeRoute = (type) =>{
    if(type==='home'){
      console.log('hi');
      
      this.setState({selectedRoute:'home'})
      console.log('hi',this.state);
    }
    else if(type === 'contactPage')
    this.setState({selectedRoute:'contactPage'})
  }
  render() {
    const {selectedRoute} = this.state
    return (
      <section className="main-layout">
        {(selectedRoute === 'home') ?
          <>
          <div className='btns-container'>
          <button className='btn-route' onClick={()=>this.changeRoute('home')}>Home</button>
          <button className='btn-route' onClick={()=>this.changeRoute('contactPage')}>ContactPage</button>
          </div>
          <Home/>
          </>:
          <>
                <button className='btn-route' onClick={()=>this.changeRoute('home')}>Home</button>
                <button className='btn-route' onClick={()=>this.changeRoute('contactPage')}>ContactPage</button>
               <ContactPage/>
          
          </>

        
      
      }

   
    </section>
    )
  }
}
