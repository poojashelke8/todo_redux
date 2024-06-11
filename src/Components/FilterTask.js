import React from 'react'
import "../Components/FilterTask.css"
// import ""

const FilterTask = () => {
  return (
    <div className='filterTask'>
      <h2 id='filtersheading'>Filters</h2>
      {/* <i class="fa-regular fa-calendar-day"></i> */}
      <div className='filterlist'>
      {/* <i class="fa-solid fa-star"></i> */}
        <li className='filterlist1'>Starred</li>
        <li className='filterlist1'>Week</li>
        <li className='filterlist1'>Important</li>
      </div>
    </div>
  )
}

export default FilterTask