import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Searchbar } from './Search';

import { motion } from 'framer-motion';
import { SearchContext } from '../App';

export const Navbar = () => {
  const { setSearchInput, setCurrentFilter, setIsCartOpen, cart } =
    useContext(SearchContext);

  return (
    <motion.nav
      className="flex justify-evenly p-3 2xl:text-3xl 2xl:p-5 
    text-slate-50 text-2xl font-bold items-center bg-transparent font-secondary max-w-[2000px] 
    margininlineauto"
    >
      <Link to="/ecommerce-store">
        <motion.div whileTap={{ scale: 0.9 }} className="h-5 w-5 sm:h-5">
          <svg
            className="fill-white outline-none"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path d="M31.772 16.043l-15.012-15.724c-0.189-0.197-0.449-0.307-0.721-0.307s-0.533 0.111-0.722 0.307l-15.089 15.724c-0.383 0.398-0.369 1.031 0.029 1.414 0.399 0.382 1.031 0.371 1.414-0.029l1.344-1.401v14.963c0 0.552 0.448 1 1 1h6.986c0.551 0 0.998-0.445 1-0.997l0.031-9.989h7.969v9.986c0 0.552 0.448 1 1 1h6.983c0.552 0 1-0.448 1-1v-14.968l1.343 1.407c0.197 0.204 0.459 0.308 0.722 0.308 0.249 0 0.499-0.092 0.692-0.279 0.398-0.382 0.411-1.015 0.029-1.413zM26.985 14.213v15.776h-4.983v-9.986c0-0.552-0.448-1-1-1h-9.965c-0.551 0-0.998 0.445-1 0.997l-0.031 9.989h-4.989v-15.777c0-0.082-0.013-0.162-0.032-0.239l11.055-11.52 10.982 11.507c-0.021 0.081-0.036 0.165-0.036 0.252z" />{' '}
            </g>
          </svg>
        </motion.div>
      </Link>

      <Link
        to="/ecommerce-store/browse"
        onClick={() => {
          setSearchInput('');
          setCurrentFilter();
        }}
      >
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="text-base sm:text-xl flex gap-3 items-center"
        >
          <svg
            className="hidden lg:block"
            height="24px"
            width="24px"
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                {' '}
                <path
                  className="st0"
                  d="M511.27,331.566L511.27,331.566c0-0.009,0-0.018,0-0.026c-0.008-0.052,0-0.087-0.008-0.14h-0.009 c-6.682-88.65-27.159-154.403-55.948-198.846c-14.412-22.221-30.968-39.115-49.041-50.507 c-18.048-11.401-37.649-17.198-57.388-17.18c-14.551-0.009-26.985,2.629-37.527,6.611c-15.836,5.97-27.358,14.795-36.364,21.319 c-4.495,3.28-8.373,5.961-11.549,7.592c-3.211,1.658-5.475,2.239-7.436,2.239c-1.328-0.009-2.725-0.251-4.521-0.92 c-3.115-1.137-7.288-3.732-12.278-7.332c-7.531-5.354-16.885-12.764-29.223-18.846c-12.339-6.092-27.766-10.69-46.855-10.664 c-19.739-0.018-39.34,5.787-57.388,17.18c-27.115,17.119-50.794,46.481-69.008,87.887C18.542,211.332,5.743,264.92,0.746,331.401 H0.738c-0.009,0.052,0,0.096-0.009,0.14c0,0.008,0,0.017,0,0.026l0,0C0.243,336.981,0,342.247,0,347.358 c-0.009,25.058,5.77,46.455,16.651,63.141c10.846,16.694,26.863,28.347,45.614,33.822c6.43,1.892,13.068,2.811,19.757,2.811 c19.445-0.026,39.046-7.618,57.692-20.764c18.681-13.189,36.598-32.052,52.91-55.731c7.845-11.427,18.5-24.798,29.987-34.854 c5.736-5.032,11.662-9.214,17.362-12.026c5.71-2.82,11.09-4.244,16.027-4.235c4.936-0.009,10.317,1.414,16.026,4.235 c8.555,4.199,17.588,11.558,25.787,20.112c8.226,8.538,15.67,18.196,21.562,26.76c16.312,23.688,34.23,42.55,52.902,55.739 c18.655,13.146,38.255,20.738,57.7,20.764c6.69,0,13.328-0.92,19.749-2.811c18.759-5.475,34.776-17.128,45.614-33.822 C506.221,393.813,512,372.416,512,347.358C512,342.256,511.757,336.981,511.27,331.566z M476.737,398.36 c-8.104,12.356-19.236,20.469-33.284,24.651c-4.33,1.275-8.807,1.9-13.475,1.908c-13.484,0.026-28.902-5.414-44.894-16.703 c-15.974-11.254-32.312-28.225-47.418-50.177c-8.564-12.417-20.044-27.012-33.64-38.95c-6.812-5.97-14.169-11.297-22.16-15.245 c-7.975-3.94-16.677-6.534-25.866-6.534c-9.189,0-17.892,2.594-25.866,6.534c-11.974,5.943-22.577,14.906-31.957,24.616 c-9.353,9.726-17.432,20.268-23.843,29.579c-15.106,21.952-31.454,38.923-47.419,50.177 c-15.991,11.288-31.418,16.729-44.894,16.703c-4.677-0.009-9.145-0.633-13.484-1.908c-14.04-4.182-25.172-12.295-33.284-24.651 c-8.06-12.364-13.04-29.293-13.04-51.002c0-4.451,0.208-9.111,0.65-13.961v-0.052l0.009-0.113 c6.429-86.17,26.446-148.582,52.451-188.59c12.989-20.026,27.41-34.447,42.256-43.801c14.872-9.353,30.126-13.744,45.544-13.761 c11.896,0.009,21.424,2.091,29.675,5.189c12.356,4.65,21.883,11.756,31.158,18.507c4.652,3.367,9.233,6.655,14.378,9.336 c5.111,2.655,11.028,4.729,17.666,4.729c4.399,0,8.556-0.928,12.286-2.325c6.56-2.482,12-6.213,17.422-10.065 c8.113-5.831,16.208-12.14,26.091-16.981c9.883-4.833,21.449-8.364,37.076-8.39c15.418,0.017,30.672,4.408,45.545,13.761 c22.264,14.005,43.6,39.532,60.511,78.03c16.92,38.464,29.354,89.735,34.195,154.36v0.052l0.009,0.113 c0.434,4.842,0.652,9.502,0.652,13.961C489.778,369.067,484.806,386.004,476.737,398.36z"
                ></path>{' '}
                <polygon
                  className="st0"
                  points="161.232,178.126 122.29,178.126 122.29,213.631 86.785,213.631 86.785,252.573 122.29,252.573 122.29,288.079 161.232,288.079 161.232,252.573 196.737,252.573 196.737,213.631 161.232,213.631 "
                ></polygon>{' '}
                <path
                  className="st0"
                  d="M368.659,167.002c-11.331,0-20.52,9.189-20.52,20.538c0,11.341,9.189,20.538,20.52,20.538 c11.35,0,20.538-9.197,20.538-20.538C389.197,176.191,380.008,167.002,368.659,167.002z"
                ></path>{' '}
                <path
                  className="st0"
                  d="M368.659,266.247c-11.331,0-20.52,9.189-20.52,20.53c0,11.349,9.189,20.538,20.52,20.538 c11.35,0,20.538-9.189,20.538-20.538C389.197,275.436,380.008,266.247,368.659,266.247z"
                ></path>{' '}
                <path
                  className="st0"
                  d="M418.282,216.633c-11.341,0-20.538,9.189-20.538,20.53c0,11.349,9.197,20.529,20.538,20.529 c11.35,0,20.538-9.18,20.538-20.529C438.82,225.822,429.631,216.633,418.282,216.633z"
                ></path>{' '}
                <path
                  className="st0"
                  d="M319.054,216.633c-11.349,0-20.538,9.189-20.538,20.53c0,11.349,9.189,20.529,20.538,20.529 c11.341,0,20.539-9.18,20.539-20.529C339.592,225.822,330.394,216.633,319.054,216.633z"
                ></path>{' '}
              </g>{' '}
            </g>
          </svg>
          Browse Store
        </motion.div>
      </Link>

      <Searchbar />

      <motion.div
        whileTap={{ scale: 0.95 }}
        className=" gap-2 cursor-pointer items-center hidden xl:flex select-none 
        group"
        onClick={() => {
          window.open('https://github.com/yondagonda');
        }}
      >
        <svg
          viewBox="0 0 48 48"
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          className="fill-white group-hover:fill-purple-400 duration-200"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <defs></defs>
            <path
              className="cls-1"
              d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"
            ></path>
          </g>
        </svg>
        <div className="xl:text-lg group-hover:text-purple-400 duration-200">
          yondagonda
        </div>
      </motion.div>

      <motion.div
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer text-base sm:text-xl flex gap-2 items-center"
        onClick={() => setIsCartOpen(true)}
      >
        <svg
          className="hidden lg:block"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="25px"
          height="25px"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              d="M4.78571 5H18.2251C19.5903 5 20.5542 6.33739 20.1225 7.63246L18.4558 12.6325C18.1836 13.4491 17.4193 14 16.5585 14H6.07142M4.78571 5L4.74531 4.71716C4.60455 3.73186 3.76071 3 2.76541 3H2M4.78571 5L6.07142 14M6.07142 14L6.25469 15.2828C6.39545 16.2681 7.23929 17 8.23459 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z"
              stroke="#fafafa"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{' '}
          </g>
        </svg>
        <div>
          Cart:{' '}
          {cart.length === 0 ? (
            <span className="font-normal">0</span>
          ) : (
            cart.length
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
};
