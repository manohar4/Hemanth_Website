
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Airtable from 'airtable';
import { useState,useEffect } from 'react';
import {FetchProjectsDetails} from './pages/Context' 





function App() {

  const[homePageData,setHomePageData] = useState([]);
  const[projectsData,setProjectsData] = useState([]);

  var projects,mainData;

  var base = new Airtable({apiKey: 'patNLjKsMdDUENhz4.e322f5189d8d77d61050e692ecbb226a3b15caf29face132b95d74e242a1ed99'}).base('app2X4cdpBS1O12UJ');
  const getHomePageData = async () =>{
    const records = await base('Landing Page').select({maxRecords: 100}).firstPage();  
    mainData = await records.reduce( function (r, a) {
      r[a.fields.Entity]= a.fields
      return r;
    }, {});
  
    
    setHomePageData(mainData);
    
  

  }

  
  const getProjectsData = async () =>{
    const records = await base('Projects Data').select({maxRecords: 100,sort:[{field: "ProjectID"}]}).firstPage();  
    var projectarray = [];
    projects = await records.reduce( function (r, a) {
      r["records"] = r["records"] || []
      r["records"].push(a.fields);
      return r;
  }, {});
  setProjectsData(projects.records);
  }
  

  useEffect(()=>{
    getHomePageData();
    getProjectsData();
},
// eslint-disable-next-line
[])
  return (

    <FetchProjectsDetails.Provider value={{projectsData,setProjectsData}}>

<div className="App bg-black dark:bg-black text-white max">
      <Header></Header>
      
    
      <div className='max-w-7xl mx-auto text-left w-xl p-6 mt-16 mb-16 '>
      <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl max-w-3xl' >{homePageData.length ===0 ?"":homePageData["Hero Title"].Value}</h1>
      <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400 max-w-3xl' >
      {homePageData.length ===0 ?"":homePageData["Hero Description"].Value}</p>

      <div className='mt-6 flex gap-6'>
      

        {
          homePageData.length ===0 ?"":homePageData["Links"].links.map((index,item)=>{
            
            console.log(homePageData["Links"].Attachment);
            return(

              

              <a className='group -m-1 p-1' aria-label="Github" target="_blank" rel="noreferrer" href={item}>



                <div className='w-[24px] h-auto svgIcon'>
                  <img className='svgIcon'  src={homePageData["Links"].Attachment[item].url}></img>
                </div>     
               

                 </a>
              
            )
          })
        }
       
      </div>
      </div>


      <div className='-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8' >

       
      {
          homePageData.length ===0 ?"":homePageData["Hero Images"].Attachment.map((index,item)=>{
            return(
              <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl  rotate-2 ' style={{transform: item % 2 ===0?"rotate(-2deg)":"rotate(2deg)"}}>
                  <img alt='image1' className='absolute inset-0 h-full w-full object-cover' loading='lazy' src={homePageData["Hero Images"].Attachment[item].url}></img>
               </div>
            )
          })
        }

       
       

      </div>


      <Projects ></Projects>

      
      </div>

    </FetchProjectsDetails.Provider>
   
    
  );
}

export default App;
