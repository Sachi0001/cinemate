import { Link } from 'react-router-dom'
import pagenotfound from '../assets/pagenotfound.png'
import { useTitle } from '../hooks/useTitle'

export const PageNotFound = ({title}) => {

 useTitle(title)
  return (
    <main>

<section className="flex flex-col justify-center">
  <div className="flex flex-col items-center my-4">
<p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404 Oops!!! </p>

<div className=' max-w-lg '>

<img src={pagenotfound} alt="pagenotfound" />
</div>
  </div>
 
  <div className='flex justify-center items-center '>

  <Link to={"/"}>
 
 <button className='rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500  w-64 p-5 m-5 text-'>
   Home
   </button> 
  </Link>
 

  </div>
</section>


    </main>
  )
}
