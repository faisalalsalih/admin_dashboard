import React from 'react'
import { calculateTrendPercentage } from '~/lib/utils'

const StatsCard = ({headerTitle, total, lastMonthCount, currentMonthCount}: StatsCard) => {

  const {trend, percentage} = calculateTrendPercentage(currentMonthCount, lastMonthCount);

  
  return (
    <>
      
    </>
  )
}

export default StatsCard
