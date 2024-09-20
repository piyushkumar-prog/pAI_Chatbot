import React from 'react'
import { IoIosSearch } from "react-icons/io";


export default function Search() {
    return (
      <>
       <div className="mb-3 mt-16">
                <div className=" ml-6 relative mb-4 flex w-full flex-wrap items-stretch">
                    <input
                        type="search"
                        className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l text-white border border-solid border-neutral-300 bg-slate-900 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-slate-500 dark:focus:border-primary"
                        placeholder="Enter Your Prompt"
                         />

                    <IoIosSearch className="text-white w-10 h-10 rounded p-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-400"/>
                    <button onClick={generateAnswer}
                        className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                        type="button"
                        id="button-addon1"></button>
                </div>
        </div>
   </>
    )
  }
