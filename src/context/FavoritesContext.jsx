import {  
    createContext, useContext, useEffect, useState } from "react";


const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) =>{

    const [favorites, setFavorites] = useState(() => {
    const data = localStorage.getItem("favorites");
    return data ? JSON.parse(data) : [];
    });

    useEffect(() => {
    console.log("Saving:", favorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    // add fav
    const addFavorite = (user) => {
         setFavorites((prev) => [...prev, user]);
    }

    // remove 

    const removeFavorites = (id) => {
        const update = favorites.filter((u) => u.id !== id);
        setFavorites(update);
    }

    // toggle
    
     const isFavorite = (id) => {
    return favorites.some((u) => u.id === id);
  };

    return(
        <FavoritesContext.Provider 
         value={{
            favorites,
            addFavorite, 
            removeFavorites,
            isFavorite
         }}>
            {children}
        </FavoritesContext.Provider>
    )

}

export const useFavorites = () => useContext(FavoritesContext);