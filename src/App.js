
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
   
    <div className="App bg-black dark:bg-black text-white max">
      <Header></Header>
      
    
      <div className='max-w-7xl mx-auto text-left w-xl p-6 mt-16 mb-16 '>
      <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl max-w-3xl' >Software designer, founder, and amateur astronaut</h1>
      <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400 max-w-3xl' >
        I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms</p>

      <div className='mt-6 flex gap-6'>
        <a className='group -m-1 p-1' aria-label="Github" href='https://github.com'>
        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg>        </a>
        <a className='group -m-1 p-1' aria-label="Twitter" href='https://twitter.com'>
        <svg width="15" height="24" viewBox="0 0 15 24"  fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_106_3)">
<path className="dark:fill-zinc-400 dark:group-hover:fill-zinc-300" d="M14.2594 23.5078L7.425 15.0141L13.9781 8.67188C14.1 8.54531 14.0578 8.17969 13.7297 8.17969H10.4859C10.3219 8.17969 10.1578 8.26406 9.99375 8.42813L3.79219 14.6953V0.351562C3.79219 0.117188 3.675 0 3.44063 0H1.00781C0.773438 0 0.65625 0.117188 0.65625 0.351562V23.6484C0.65625 23.8828 0.773438 24 1.00781 24H3.44063C3.675 24 3.79219 23.8828 3.79219 23.6484V18.5391L5.23594 17.1656L10.4156 23.7562C10.5562 23.9203 10.7203 24.0047 10.9078 24.0047H14.0438C14.2078 24.0047 14.3016 23.9578 14.325 23.8641L14.2594 23.5078Z" fill="#71717A"/>
</g>
<defs>
<clipPath id="clip0_106_3">
<rect width="15" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
        </a>
        <a className='group -m-1 p-1' aria-label="Twitter" href='https://twitter.com'>
        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path></svg>        </a>
        <a className='group -m-1 p-1' aria-label="Twitter" href='https://twitter.com'>
        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path></svg>
        </a>
      </div>
      </div>


      <div className='-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8' >

        <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2'>
            <img alt='image1' className='absolute inset-0 h-full w-full object-cover' loading='lazy' src='https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'></img>
        </div>
        <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2'>
            <img alt='image1' className='absolute inset-0 h-full w-full object-cover' loading='lazy' src='https://images.unsplash.com/photo-1553933899-131780ba04a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'></img>
        </div>
        <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2'>
            <img alt='image1' className='absolute inset-0 h-full w-full object-cover' loading='lazy' src='https://images.unsplash.com/photo-1550432163-9cb326104944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img>
        </div>
        <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2'>
            <img alt='image1' className='absolute inset-0 h-full w-full object-cover' loading='lazy' src='https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'></img>
        </div>
        <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2'>
            <img alt='image1' className='absolute inset-0 h-full w-full object-cover' loading='lazy' src='https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'></img>
        </div>

      </div>


      <Projects></Projects>

      
      </div>
  );
}

export default App;
