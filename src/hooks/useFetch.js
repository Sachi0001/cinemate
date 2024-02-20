import { useState,useEffect } from "react";


export const useFetch = (apipath, queryTerms="") => {

const [data, setData] = useState([])

const url = `https://api.themoviedb.org/3/${apipath}?api_key=4ff455dedd79aba3aec82e59c5a9329d&query=${queryTerms}`

    useEffect(()=>{

        async function fetchMovies(){
          const response = await fetch(url)
          const json = await response.json();
          setData(json.results)
        }
        
        fetchMovies();
        
        },[url])


  return {data}
    
    }
