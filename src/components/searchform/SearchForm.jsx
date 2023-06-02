import { useContext} from 'react';
import { AppContext } from '../../Context';
import './searchform.css'

const SearchForm = () => {
  const { setSearchTerm} = useContext(AppContext);
 
  
  return (
    <div>SearchForm</div>
  )
}

export default SearchForm