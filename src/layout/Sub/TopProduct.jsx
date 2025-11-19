import React from 'react'

const TopProduct = () => {
    const prods=[
        {
            title:"Air Jordan",
            Stock:'10',
            img:'./style/blackS.png'
        }
    ]

  return (
  <div>
{prods.map((prod,index)=>(
  <div key={index}
  >

  </div>
))}
  </div>
  )
}

export default TopProduct