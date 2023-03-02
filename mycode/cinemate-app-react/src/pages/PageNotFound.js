import React, { useEffect } from 'react';
import pagesnotFoundImage from '../assets/images/pagenotfound.png';
import { Link } from 'react-router-dom';
import {Button} from '../components/Button';


export const PageNotFound = ({title}) => {

  useEffect(() => {
    
    document.title= `${title} | Sarjana Brewok`;

  });

  return (

    <main>

      <section className="flex flex-col justify-center px-2">

        <div className='flex flex-col items-center my-4'>

          <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white' >404 Oops!</p>

          <div className="max-w-lg">

            <img className='rounded' src={pagesnotFoundImage} alt="" srcset="" />

          </div>

        </div>

        <div>

          <div className="flex justify-center my-4">

            <Link to="/">

              <Button>Back To Home</Button>
              
            </Link>

          </div>

        </div>

      </section>

    </main>

  )
}
