import { Home } from './pages/Home';
import { ContactPage } from './pages/ContactPage';
import { Charts } from './pages/Charts';
import './assets/scss/main.scss';


import React, { Component } from 'react'

export default class App extends Component {
  state = {
    selectedRoute:'home',
   
  }
  changeRoute = (type) =>{

      this.setState({selectedRoute:type})
  }
  
  
  render() {
    const {selectedRoute} = this.state
    return (
      <section className="main-layout">
        {(selectedRoute === 'home') ?
          <>
          <div className='main-btns-container'>
            <img className='logo'src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2048px-Bitcoin.svg.png'/>
          <button className='btn-route' onClick={()=>this.changeRoute('home')}>Home</button>
          <button className='btn-route' onClick={()=>this.changeRoute('contactPage')}>Contacts</button>
          <button className='btn-route' onClick={()=>this.changeRoute('Charts')}>Charts</button>
          </div>
          <Home/>
          </>:(selectedRoute === 'contactPage')?
          <>
            <div className='main-btns-container'>
            <img className='logo'src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2048px-Bitcoin.svg.png'/>
                <button className='btn-route' onClick={()=>this.changeRoute('home')}>Home</button>
                <button className='btn-route' onClick={()=>this.changeRoute('contactPage')}>Contacts</button>
                <button className='btn-route' onClick={()=>this.changeRoute('Charts')}>Charts</button>
                </div>
               <ContactPage/>
          
          </>:
          <>
          
            <div className='main-btns-container'>
            <img className='logo'src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2048px-Bitcoin.svg.png'/>
                  <button className='btn-route' onClick={()=>this.changeRoute('home')}>Home</button>
                  <button className='btn-route' onClick={()=>this.changeRoute('contactPage')}>Contacts</button>
                  <button className='btn-route' onClick={()=>this.changeRoute('Charts')}>Charts</button>
                  </div>
                 <Charts/>
          </>
      
      }

    </section>
    )
  }
}
