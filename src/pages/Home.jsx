import React, { Component } from 'react'
import { userService } from '../services/user.service'
import { bitCoinService } from '../services/bitCoinService'
import {Chart} from '../components/Chart'
export  class Home extends Component {

    state={
        user:null,
        currBitCoinRate:0
        

    }
    componentDidMount(){
        this.loadUser()
        this.loadBitCoinRate()
    }
    loadUser = () =>{
        const user =userService.getUser()
        this.setState({user})
    } 
    loadBitCoinRate = async () => {
        const currBitCoinRate = await bitCoinService.getRate()
        this.setState({currBitCoinRate})
    }
  render() {
    const {user, currBitCoinRate}= this.state
    return (
        <>
        <section className='greating-container'>
          <h1 className='greating'>Hello {user?.name}</h1>
      <h3>Current Bit-Coin-Rate:  {currBitCoinRate}</h3>
        </section>
        <Chart/>
        </>
    )
  }
}
