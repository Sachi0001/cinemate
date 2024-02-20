
import { Route,Routes } from "react-router-dom"
import { MovieDetails, MovieList, PageNotFound, Search } from "../Pages"

export const AllRoutes = () => {
  return (
    <div className=" dark:bg-gray-900">
    
<Routes>

<Route path="/" element={<MovieList apipath="movie/now_playing" title="Home"/>} />
<Route path="movie/:id" element={<MovieDetails />} />
<Route path="movies/popular" element={<MovieList  apipath="movie/popular" title="popular"/>}/>
<Route path="movies/top" element={<MovieList  apipath="movie/top_rated" title="top_rated"  />}  />
<Route path="movies/upcoming" element={<MovieList  apipath="movie/upcoming" title="upcoming"/>}   />
<Route path="search" element={<Search apipath="search/movie" />} />
<Route path="*" element={<PageNotFound title = "page not found"/>} />


</Routes>



    
    
    
    </div>
  )
}
