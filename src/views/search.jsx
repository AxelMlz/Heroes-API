import React, { Component,  useEffect, useState } from 'react';
import { toast } from "react-toastify";
import ReactDOM from 'react-dom';
import '../index.css';



function Search() {
    
        const [heroes, setHeroes] = useState([]);
        const [selectHeroes, setSelectHeroes] = useState(null);
        const [alias, setAlias] = useState('')
      

        // function showCard(alias)  {
        //     fetch(`http://localhost:8002/heroes/${alias}`)
        //       .then((res) => res.json())
        //       .then((res) => {
        //         setSelectHeroes(res.data);
        //         console.log(selectheroes)
        //       });
        //   };

          const handleSubmit = (e) => {
            e.preventDefault();
            if (alias) {
              console.log("fetch")
            fetch(`/heroes/${alias}`)
              .then((res) => res.json())
              .then((res) => {
                console.log(res)
                setSelectHeroes(res);
                
              });
              } else {
          toast.error("Please input a hero's name");
        
              
              }
          };
console.log(selectHeroes)
  return (
    <> 
        <h1 className="text-3xl font-bold underline p-10">Search a hero :</h1>

        <div >
            
            <input type='text'className='space-x-3 rounded-xl form-input shadow-lg border-4 p-15'
            //  onChange={handleChange}
              placeholder ='Venom'
             value={alias}
						onChange={(e) => setAlias(e.target.value)}
             />
            
            <button className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full shadow-lg border-4 mx-3" onClick={handleSubmit}>
            Search
            </button>

        </div>
        
       {selectHeroes && 
       <div class="max-w-sm rounded overflow-hidden shadow-lg p-15">
            <div class="px-6 py-4">

                <div class="font-bold text-xl mb-2">{selectHeroes.heroName}</div>

                <p class="text-gray-700 text-base"
                // function heroes.power.map()
                >
                   { selectHeroes.power.map((power) => (
                      <p> {power} </p>
                   ))}
                </p>

                <p>age : {selectHeroes.age}</p>


            </div>
            <div class="px-6 pt-4 pb-2">

                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
           
            </div>
        </div>}
      
    
        
   </>
  );
}

export default Search;