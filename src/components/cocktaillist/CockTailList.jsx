import React, { useContext } from 'react'
import Loading from '../loading/Loading'
import CockTail from '../cocktail/CockTail'
import { AppContext } from '../../Context'


const CockTailList = () => {
  const {cockTails, loading} = useContext(AppContext);


  if (loading) {
    return <Loading />
  }

  if (cockTails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }

  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cockTails.map((item) => {
          return <CockTail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default CockTailList