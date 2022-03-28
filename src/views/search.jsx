import React, { Component,  useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';



function Search() {
    
        const [heroes, setHeroes] = useState([]);
        const [alias, setAlias] = useState('')
    
        useEffect(() => {
            // componentDidMount
            fetch("http://localhost:8001/heroes")
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                    setHeroes(res);
                });
        }, []);

        let showCard = (alias) => {
            fetch(`http://localhost:8001/heroes/${alias}`)
              .then((res) => res.json())
              .then((res) => {
                setHeroes(res.data);
                console.log(heroes)
              });
          };

          function handleChange(e) {
            setAlias(e.target.value);
          };

  return (
    <> 
        <h1 className="text-3xl font-bold underline p-10">Search a hero :</h1>

        <div >
            
            <input type='text'className='space-x-3 rounded-xl form-input shadow-lg border-4 p-15'
             onChange={handleChange} placeholder ='Venom'
             />
            
            <button className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full shadow-lg border-4 mx-3" onClick={showCard}>
            Search
            </button>

        </div>
        
       (
       <div class="max-w-sm rounded overflow-hidden shadow-lg p-15">
            <div class="px-6 py-4">

                <div class="font-bold text-xl mb-2">{heroes.heroName}</div>

                <p class="text-gray-700 text-base"
                // function heroes.power.map()
                >
                    Lorem ipsum dolor sit amet, xconsectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>

                <p>age : {heroes.age}</p>


            </div>
            <div class="px-6 pt-4 pb-2">

                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
           
            </div>
        </div>
      ) 
    
        
   </>
  );
}

export default Search;