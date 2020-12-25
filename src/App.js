import React, { useState } from "react";
import axios from 'axios';
import './App.css';
import logo1 from './components/fork-black-16.png';
import logo2 from './components/star-yellow-16.png';
const apiurl = 'https://private-3e58af-githubtrendingapi.apiary-mock.com/repositories';



function App(){
    
  const [repo,setrepo] = useState('');
  const fetchdata = async()=>{
    
     const response = await axios.get(apiurl)
    
    setrepo(response.data);
  };
  
  return(
    
    <div className = 'App'>
      <div className='title1'> Trending </div>
      <div >
        <button className = "fetch-button" onClick={fetchdata}>
          Click to Fetch Data
          </button>
      </div>
      <hr className='line'></hr>
      <div className = "repos">
        {repo &&
          repo.map((repo,index) => {
            console.log(index);
            let url = repo.avatar;
            console.log(url);
            return(
              <div className = "repo" key = {index}>
                  <div className = 'repoimage'>
                    <img className = 'repoimage1' src = {url}/>
                    </div>
                  <div className = 'repo_content'>
                      <div className = 'author'>{repo.author}</div>
                      <div className = 'name'><b>{repo.name}</b></div>
                      <p className = 'description'>{repo.description}</p>
                    
                      <div className = "bottomline">
                        {repo.language}
                        <img className = 'logo' src = {logo2} alt = " "/>
                        {repo.stars}
                        <img className = 'logo' src = {logo1}  alt = " "/>
                        {repo.forks}
                      </div>
                      <hr className = 'line'></hr>
                  </div>
                </div>
            );
          }
          )
        }
      </div>
    </div>
  );
}
export default App;




