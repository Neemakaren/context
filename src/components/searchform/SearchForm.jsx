import { useContext} from 'react';
import { AppContext } from '../../Context';
import './searchform.css'
import { useRef, useEffect } from 'react';

const SearchForm = () => {
  const { setSearchTerm } = useContext(AppContext);
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  
 
  const handleSubmit = (e) => {
      e.preventDefault()
  }
  
  return (
    <section className='section search'>
    <form className='search-form' onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor='name'>search your favorite cocktail</label>
        <input
          type='text'
          name='name'
          id='name'
          ref={searchValue}
          onChange={searchCocktail}
        />
      </div>
    </form>
  </section>
  )
}

export default SearchForm