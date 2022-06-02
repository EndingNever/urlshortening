import React from 'react'
import { StatisticsContainer } from '../../Styles'


export default function Statistics() {

  const stats = [
    {
      id: 0,
      title: "Brand Recognition",
      subText: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
    },
    {
      id: 1,
      title: "Detailed Records",
      subText: ""
    },
    {
      id: 2,
      title: "Brand Recognition",
      subText: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
    },
  ]
  
  return (
    <StatisticsContainer>
      <div className="text-container">
        <h1>Advanced Statistics</h1>
        <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
          
      </div>
    </StatisticsContainer>
  )
}
