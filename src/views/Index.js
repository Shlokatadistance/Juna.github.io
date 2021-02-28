/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />

      <section className="header relative pt-16 items-center flex h-screen max-h-900-px bg-teal-500 ">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 ">
            <div className="pt-40 sm:pt-0 rounded-lg ">
              <h2 className="font-bold text-5xl text-black-700 items-center justify-center inline-flex text-center">
             Juna
              </h2>
              <div class="  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500 text-2xl font-black">
   Celebrating Women Entrepreneurs
</div>
              <p className="mt-4 text-lg leading-relaxed text-black-600">
              Juna is a marketplace for the women out there, fighting against
              all adversities and displaying their inherent creativity to 
              the world!
              </p>
              <div className="mt-12">
                <Link
                  
                  to="./auth/register"
                  className="get-started text-white font-semibold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-teal-200 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Start Selling!
                </Link>
                <Link
                  
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-purple-200 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  to="./Community"
                >
                 Check our Entrepreneurs!
                </Link>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-1 b-auto right-0 pt-8 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-800px rounded-full"
          src={require("assets/img/juna.png")}
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-teal-500">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20 bg-teal-500"
          style={{ transform: "translateZ(0)" }}
        >
        </div>
        <div className="container mx-auto bg-teal-500">
          <div className="flex flex-wrap items-center bg-teal-500">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32 bg-teal-500">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-teal-200">
                <img
                  alt="..."
                  src={require("assets/img/junalogo.jpg")}
                  className="w-full align-middle rounded-t-lg bg-red-400"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Empowering Change
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                  Juna was created for one sole reason - Bridge the gap
                  between female led businesses and the markets.
                  </p>
                </blockquote>
              </div>
            </div>






            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-black-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-check"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Assurance!
                      </h6>
                      <p className="mb-4 text-black-600">
                      We ensure complete privacy and data protection, using
                      the latest SSL certificates on our websites,
                      as well as AES techniques.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-black-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-users"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Community Sessions
                      </h6>
                      <p className="mb-4 text-black-600">
                      Along with provding the market, we also help offer guidance to the 
                      Juna Sellers, over the Juna Mobile Application, which hosts weekly sessions on
                      Entrepreneurial Skills, Production Techniques and other resourceful services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-black-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fab fa-shopify"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Payment Security</h6>
                      <p className="mb-4 text-black-600">
                      Shopify powers the payment systems on this platform, so you can simply
                      relax and expand your business!
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-black-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-phone"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        SOS Level Emergency?
                      </h6>
                      <p className="mb-4 text-black-600">
                        Grab a coffee and just ping us!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-24 md:px-4 ml-auto mr-auto mt-48">
                <i className="fas fa-venus text-5xl left-10 right-10 "></i>

              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Building for the Future
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-black-700">
              When women have been given the right platform, they have come up with the best ideas of mankind. Be it
              Margaret Hamlinton who developed the onboard software of the NASA Apollo Mission, placing humanity on the moon,
              or be it Denise Coates and her company, Bet365, arguably at the center of every major football game.

              We want to give women the platform to showcase their products, expandable
              to the depth of their creativities.
              </p>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={require("assets/img/comp1.jpg")}
                  className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/img1.jpg")}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                />
                <img
                  alt="..."
                  src={require("assets/img/comp3.jpg")}
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/comp5.jpg")}
                  className="w-full align-middle rounded absolute shadow-xl max-w-200-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href="https://images.pexels.com/photos/5696003/pexels-photo-5696003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    target="_blank"
                  >
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-sm max-w-full w-15 mx-auto p-9 bg-white"
                        src="https://images.pexels.com/photos/5696003/pexels-photo-5696003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Jewellery
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-sm max-w-full w-20 mx-auto p-9 bg-white"
                        src="https://images.pexels.com/photos/264591/pexels-photo-264591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Accesories
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-sm max-w-full w-20 mx-auto p-9 bg-white"
                        src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Clothing
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-sm max-w-full w-20 mx-auto p-9 bg-white"
                        src="https://images.pexels.com/photos/6118897/pexels-photo-6118897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Handicrafts
                      </p>
                    </div>
                  </a>

                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-15 md:px-4 md:py-4 ml-auto mr-auto mt-48">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Carefully Curated Products!
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              Our sellers feature from multiple locations catering to the many needs and 
              requirements as desired. Our platform carefully curates the products being showcased, 
              ensuring not only the highest standards possible, but also helping progress the 
              cause of "Usable Prodcuts", something which faded with the boom of mainstream 
              online marketplaces.
              </p>
            </div>
          </div>
        </div>
      
        

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-bold text-4xl text-black-400">What are you waiting for?</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-black-600">
            Expand your horizons ladies! Conquer your dreams and win your audience 
            with your products! More importanly, download our application to further broaden
            your entrepreneurial skills!
            </p>
            <div className="text-black-600 p-3 text-center items-center justify-center inline-flex w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fab fa-android fa-lg"></i>
                      </div>
                      <span>
                      {" "}
                      </span>
                      <div className="text-black-600 p-3 inline-flex text-center items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fa fa-mobile fa-lg"></i>
                      </div>

          </div>
        </div>
      </section>





      <Footer />
    </>
  );
}
