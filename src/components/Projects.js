
import { useContext} from 'react';
import {FetchProjectsDetails} from '../pages/Context';




export default function Example() {

    
    const {projectsData} = useContext(FetchProjectsDetails);

    
  return (
    <div className='max-w-7xl mx-auto text-left w-xl p-6 mt-24 mb-16 '>
    <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl max-w-3xl' >Projects
    </h1>
    <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400 max-w-3xl' >
      I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms</p>

    
    <div className='mt-16 sm:mt-20' >
        
        <ul className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3' >
            
            {projectsData.map((item,index)=>{
                return (
                    <li className='group relative flex flex-col items-start' >

                    <div className='relative overflow-y-hidden z-10 flex h-36 w-full  items-center justify-center rounded-lg bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0' >
                     <img alt="" loading="lazy"  decoding="async" data-nimg="1" class="" src={item.Project_Cover[0].url}></img>
                    </div>
    
                    <h2 className='mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100' >
                        <div className='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl'></div>
                        <a target="_blank" rel="noreferrer"  href={item.Project_Link}>
                                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                <span className="relative z-10">{item.Project_title}</span>
                        </a>
                    </h2>
                    <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.Project_Description}</p>
                    
                    <p className='relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200' >
                        
                    <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none"><path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path></svg>
                    <span class="ml-2">{item.Link_Name}</span>
                    </p>
    
                </li>
                
                )
            })}

            
        </ul>

    </div>


    </div>

  )
}
