import { useState } from 'react';
import React from 'react'
import './FilterBox.css'
import { dataRender, months, years } from '../../Utils/DataRender';

const FilterBox = ({ getMonthYear }) => {

    const [selectedMonth, setSelectedMonth] = useState("january")
    const [selectedYear, setSelectedYear] = useState(2023)


    const monthToRender = () => dataRender(months)

    const yearToRender = () => dataRender(years)

    const handleMonthChange = (e) => {

        setSelectedMonth(e.target.value)

    }

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value)
    }

    const updateParent = (e) => {
        e.preventDefault()
        getMonthYear(selectedMonth, selectedYear)
    }


    return (
        <>
            <form className="filter-card" action="" onSubmit={updateParent}>
                <div className="wrapper">

                    <div className="date">

                        <label htmlFor="month">Month :</label>
                        <select value={selectedMonth} onChange={handleMonthChange}>
                            {monthToRender()}
                        </select>
                    </div>
                    <div className="date">

                    <label htmlFor="year">Year :</label>
                    <select value={selectedYear} onChange={handleYearChange}>
                        {yearToRender()}
                    </select>
                    </div>
                </div>
                <button type='submit'> Find Events</button>
            </form>
        </>
    )
}

export default FilterBox