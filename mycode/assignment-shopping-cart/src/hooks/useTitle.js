import React, { useEffect } from 'react'

export const useTitle = (title) => {

  useEffect(() => {
    
    document.title = `${title} | Sarjana Brewok`

  }, [title])
  

  return null;
  
}
