import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
export  function Chart() {
  return (
    <section className='chart-contianer'>
           <Sparklines data={[5, 10, 5, 20, 8, 15,40,55,90,2,16]}  width={100} height={30} margin={5}>
           <SparklinesLine color="blue" />
    </Sparklines>
    </section>
 
  )
}
