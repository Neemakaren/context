import { createContext, useState, useEffect} from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTearm] = useState('a')
    const [cockTails, setCockTails] = useState([]);

    const fetchDrinks = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${url}${searchTerm}`)
        const data = await response.json();
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }

    useEffect(() => {
      fetchDrinks()
    }, [searchTerm])


  return (
    <AppContext.Provider 
    value={{
        loading,
        cockTails,
        setSearchTearm,
    }}>
      {children}
    </AppContext.Provider>
  )
}

