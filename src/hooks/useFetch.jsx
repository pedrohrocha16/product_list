import { useState, useEffect } from "react";

export const useFetch = (url) => {

   const [data, setData] = useState(null)

   useEffect(() => {
      fetch(url, {
         method:"GET",
         headers: {
            'Content-Type':'application/json'
         }
      })
      .then((resp) => resp.json())
      .then((data) => {
         setData(data)
      })
      .catch((err) => console.log(err))      
   }, [url])
   return {data}
}