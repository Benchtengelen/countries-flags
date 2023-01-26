import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countries, setcountries] = useState([]);


        const fetchData = async() => {
         const response = await axios.get("https://restcountries.com/v2/all")
         setcountries(response.data)
        }

    useEffect(() => {
         fetchData();
    },[])


  return (
    <div className="App">
       <h1>Countries Flags</h1>
         {countries.map(country => {
          return  ( 
              <div key={country.name}>
               <h2>{country.name}</h2>
               <h4>{country.capital}</h4>
               <p>
                <img 
                src={country.flag} 
                alt={country.name} 
                style={{width: "100px"}} />
                </p>
           </div>
           ); 
          })}
    </div>
  );
}

export default App;
