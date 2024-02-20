import { Card } from "../components/Card"
import { useFetch } from "../hooks/useFetch"

import { useSearchParams } from "react-router-dom"
import { useTitle } from "../hooks/useTitle";

export const Search = ({apipath}) => {

  const [searchParams] = useSearchParams();
const queryTerms = searchParams.get("k")
  

  const{data:movies} = useFetch(apipath, queryTerms);
 useTitle(`seaech result for ${queryTerms}`);




  return (
    <main>

<section className="max-w-7xl mx-auto py-7">

  <div className="flex justify-start flex-wrap gap-2">


    {movies.map((movie)=>(
      <Card key={movie.id} movie={movie}/>
    ))}


  </div>
</section>


    </main>
  )
}
