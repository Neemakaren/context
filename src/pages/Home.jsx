import React from 'react'
import CockTailList from '../components/cocktaillist/CockTailList'
import SearchForm from '../components/searchform/SearchForm'

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CockTailList />
    </main>
  )
}

export default Home