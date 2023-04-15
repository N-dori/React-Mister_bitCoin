import React, { Component } from 'react'
import { userService } from '../services/user.service'
import { bitCoinService } from '../services/bitCoinService'
import {Chart} from '../components/Chart'


export  class Home extends Component {

    state={
        user:null,
        currBitCoinRate:0,
        BitCoinMarketPrice:null
        

    }
    componentDidMount(){
        this.loadUser()
        this.loadBitCoinInfo()
  
    
    }
    loadUser = () =>{
        const user =userService.getUser()
        this.setState({user})
    } 
    loadBitCoinInfo = async () => {
        const currBitCoinRate = await bitCoinService.getRate()
        this.setState({currBitCoinRate})   
    }
 
  render() {
    const {user, currBitCoinRate}= this.state
    return (
        <>
        <section className='greating-container'>
          <h1 className='greating'>Hello {user?.name}</h1>
      <h3> <img  className="btc-symbol" src="https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.png"/> Rate:  {currBitCoinRate} <span>(USD)</span></h3>
        </section>
        <section className='my-chart' style={{gridColumn: 2}}>
          <h1> BTC Average price</h1>
        <Chart />

        </section>
       


        </>
    )
  }
}
