import React from 'react'
import "../Components/FilterTask.css"

const FilterTask = () => {
  return (
    <div className='filterTask'>
      <h1 id='filtersheading'>Filters</h1>
      <div className='filterlist'>
        <li className='filterlist1'>Starred</li>
        <li className='filterlist1'>Week</li>
        <li className='filterlist1'>Important</li>
      </div>
    </div>
  )
}

export default FilterTask