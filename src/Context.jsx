import { createContext, useState, useEffect} from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('a')
    const [cockTails, setCockTails] = useState([]);

    const fetchDrinks = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${url}${searchTerm}`)
        const data = await response.json();
        // console.log(data)
        const {drinks} = data;
        if(drinks){
          const newCocktails = drinks.map((item) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
            } = item

            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            }
          })
          setCockTails(newCocktails)
        }
        else(
          setCockTails([])
        )
        setLoading(false)
      } catch (err) {
        console.log(err)
        setLoading(false)
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
        setSearchTerm,
    }}>
      {children}
    </AppContext.Provider>
  )
}

