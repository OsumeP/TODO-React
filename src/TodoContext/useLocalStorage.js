import React from "react";
function useLocalStorage(initialVal, itemName){
    const [item, setItem] = React.useState(initialVal);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
      setTimeout(() => {
        try{
          const itemsFromStorage = window.localStorage.getItem(itemName)
          if (itemsFromStorage) setItem(JSON.parse(itemsFromStorage));
          setLoading(false)
        }catch (error){
          setLoading(false);
          setError(true);
        }
      }, 2000)
    }, [itemName]);

    const saveItem = (newItems) => {
      let stringify = JSON.stringify(newItems)
      localStorage.setItem(itemName, stringify)
      setItem(newItems);
    }
    return {item, saveItem, loading, error}
}

export {useLocalStorage};