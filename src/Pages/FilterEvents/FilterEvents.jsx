import React, { useState } from 'react'
import './FilterEvents.css'
import FilterBox from '../../Components/FilterBox/FilterBox'
import SearchEventList from '../../Components/SearchEventList/SearchEventList'

const FilterEvents = () => {
  const [monthYear, setMonthYear] = useState({
    selectedMonth:null,
    selectedYear:null
  }) 
  const getMonthYear = (selectedMonth, selectedYear)=>{
    setMonthYear({selectedYear,selectedMonth})
  }
                

  return (
    <div>
     <div className="find-events-wrapper">

    <FilterBox getMonthYear={getMonthYear}/>
    <SearchEventList/>
     </div>
    </div>
  )
}

export default FilterEvents