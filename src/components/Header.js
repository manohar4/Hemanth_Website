

import Logo from '../assets/images/logo.jpeg'
import React, { useState } from "react";





export default function Example() {

  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  


  return (
    <header className="bg-gradient-to-b from-black via-black/70 to-black/00 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 " aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-12 w-auto rounded-full" src={Logo} alt=""/>
          </a>
        </div>
        
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 md:hidden">
          <button  aria-expanded={isOpen}
                onClick={handleToggle}  className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium
                  text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200
                  dark:ring-white/10 dark:hover:ring-white/20" type="button" data-headlessui-state="" id="headlessui-popover-button-:R2qb6:">
            Menu
            <svg viewBox="0 0 8 6" aria-hidden="true" className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
              <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>

          <nav className={`md:block ${isOpen ? "block" : "hidden"}`}>
            <div className='fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100'>
                <div className='flex flex-row-reverse items-center justify-between' >
                    <button aria-label='Close Menu' onClick={handleToggle} type='button' className='-m-1 p-1' >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-zinc-500 dark:text-zinc-400"><path d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </button>
                    <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Navigation</h2>
                </div>
                <nav className="mt-6 text-left" ><ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300"><li><a className="block py-2" data-headlessui-state="open" href="/about">About</a></li><li><a className="block py-2" data-headlessui-state="open" href="/articles">Articles</a></li><li><a className="block py-2" data-headlessui-state="open" href="/projects">Projects</a></li><li><a className="block py-2" data-headlessui-state="open" href="/speaking">Speaking</a></li><li><a className="block py-2" data-headlessui-state="open" href="/uses">Uses</a></li></ul></nav>

            </div>
          </nav>
        </div>


        <nav className="pointer-events-auto hidden md:block"><ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"><li><a class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/about">About</a></li><li><a class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/articles">Articles</a></li><li><a class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/projects">Projects</a></li><li><a class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/speaking">Speaking</a></li><li><a class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/uses">Uses</a></li></ul></nav>


      </nav>
      
    </header>
  )
}
