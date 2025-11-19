import React from 'react'
import StatCard from './Sub/StatCard'
import TopProduct from './Sub/TopProduct'
import Analytics from './Sub/Analytics'
import SalesTarget from './Sub/SalesTarget'


const Dashboardlayout = () => {
  return (
    <div>

 <StatCard/><TopProduct/>
<div className='grid grid-cols-2 mt-2'>
   <Analytics/><SalesTarget/>
</div>
    </div>
  )
}

export default Dashboardlayout