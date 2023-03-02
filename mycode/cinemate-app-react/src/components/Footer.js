import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {

  return (
  
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">

        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Sarjana Brewok</Link>. All Rights Reserved.
        </span>

        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            
            <li>
                <a href="#" target="_blank" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
            </li>

            <li>

                <a href="#" className="mr-4 hover:underline md:mr-6">Linked In</a>
            </li>
            <li>

                <a href="#" className="mr-4 hover:underline md:mr-6">Github</a>
            </li>
            <li>

                <a href="#" className="hover:underline">Contact</a>
            </li>
            
        </ul>

    </footer>

  )

}
