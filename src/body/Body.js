import React from 'react'
import List from './list/List'
import Search from './search/Search'

function Body() {
  return(
    <div className='mx-28'>
      <Search />
      <List />
    </div>
  )
}

export default Body