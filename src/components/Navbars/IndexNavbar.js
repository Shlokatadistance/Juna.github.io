/*eslint-disable*/
//this is the actual page, which is responsible for the navigation
//I just need to create another one of these and we shoul be good. 
import React from "react";
import { Link } from "react-router-dom";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-1 z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-yellow-500 shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-green-500 text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
            >
              Juna
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                      <Link
          to="/profile"

          className="text-xl py-2 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-black-800"
        >
          Shop
        </Link>
                
              </li>
            </ul>
            <div className="flex-auto px-4 lg:px-10 py-11 pt-0">
                <form>
                  <div className="relative w-full mb-3">
                    <input
                      type="search"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-full text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Search"
                    />
                  </div>
                  </form>
              </div>
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
        <Link
          to="/community"
          className="text-xl py-2 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-black-800"
        >
          Join our Community!
        </Link>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.google.com/"
                  target="_blank"
                >
                  <i className="text-black-500 fa fa-user text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.google.com/"
                >
                  <i className="text-black-500 fa fa-shopping-cart text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.google.com/"
                  target="_blank"
                >
                  <i className="text-black-500 fa fa-share-alt text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>

              <li className="flex items-center">
                <button
                  className="bg-red-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded:xl shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fa fa-bullhorn"></i> Follow Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
