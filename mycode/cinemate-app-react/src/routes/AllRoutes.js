import {Routes,Route} from 'react-router-dom';
import { MovieList,MovieDetail,Search,PageNotFound } from '../pages';

export const AllRoutes = () => {

    return (
        
        <div className='dark:bg-slate-900'>

            <Routes>

                <Route path='' element={ <MovieList apiPath="movie/now_playing" title="Home Page"  /> } />
                <Route path='movie/:id' element={ <MovieDetail title="Movie Detail" /> } />
                <Route path='movies/popular' element={ <MovieList apiPath="movie/popular" title="Popular Page"  /> } />
                <Route path='movies/top' element={ <MovieList apiPath="movie/top_rated" title="Top Rated Page"  /> } />
                <Route path='movies/upcoming' element={ <MovieList apiPath="movie/upcoming" title="Upcoming Page"  /> } />
                <Route path='search' element={ <Search apiPath="search/movie" title="Search Page"  /> } />
                <Route path='*' element={ <PageNotFound title="404 Page Not Found" /> } />

            </Routes>

        </div>
        
    )

}
