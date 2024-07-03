import React from 'react'
import FutureData from "./FutureData"
import { AllTypes } from '@/type'
import CustomAccordian from './CustomAccordian'

const Accordian = ({data}: AllTypes) => {
  return (
    <div className='w-[90%] flex flex-col justify-center items-center mb-4'>
      <br />
    {/* {data && data.forecast.forecastday.map((item) => <FutureData key={item.date} futureData={item}/>)} */}
    <h1 className='text-2xl underline underline-offset-2 font-medium font-sans text-slate-500 max-sm:text-lg'>Next 10 Days Forecast</h1>
    {data && data.forecast.forecastday.map((item) => <CustomAccordian key={item.date} futureData={item}/>)}
    </div>
  )
}

export default Accordian