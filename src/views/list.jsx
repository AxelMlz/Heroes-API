import React, { Component,  useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Card from '../components/card.jsx'



function List() {
    
        const [heroes, setHeroes] = useState([]);
        const [alias, setAlias] = useState('')
        const [list, setList] = useState(true);
        const [card, setCard] = useState(false);
        const [change, setChange] = useState('');

    
        useEffect(() => {
            // componentDidMount
            fetch("http://localhost:8001/heroes")
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                    setHeroes(res);
                });
        }, []);


            
    
    return (
    <> 
     {heroes.map((hero) => (
           

         <div className="container p-10">

			<div className="container-cards">

				<div class="max-w-sm rounded overflow-hidden shadow-lg p-15">
                    <div class="font-bold text-xl mb-2">{hero.heroName} </div>
                    <div class="px-6 py-4">

                        Power/s : {hero.power.join(', ')}
                      
                        <p>age : {hero.age}</p>

                    </div>

                    <div class="px-6 pt-4 pb-2">
                        <ul> 
                            {/* {heroes.power.map((i) => { 
                               return ( 

                                   <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{i.power}</span>)})

                             } */}
                            
                        </ul>
                    </div>
                </div>
	
			</div>
		</div>
        ))}
        </>
    )}
        

export default List;