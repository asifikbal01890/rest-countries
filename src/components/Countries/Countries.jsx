import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"
// import SearchBar from "../SearchBar/SearchBar";

const Countries = () => {

    const [countries, setCountries] = useState([])
    // const [inputValue, setInputValue] = useState('')
    const [cName, setCName] = useState([])

    // console.log(cName);
    
    
    // const handleSearch = () =>{
      
    // }

    useEffect(()=>{ 
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res=>res.json())
        .then(data => setCountries(data))
    }, [])


    return (
        <div>
            <div>
                {/* <SearchBar setInputValue={setInputValue} handleSearch={handleSearch}></SearchBar> */}
                {
                    cName.map(n => <span style={{marginRight: "10px", fontSize:"20px"}}>{n},</span>)
                }
            </div>
            <div className="countries-container">
                
            { 
                countries?.map(country => <Country
                    setCName={setCName}
                    cName={cName}
                key={country.cca3}
                country={country}
                ></Country>)
            }
        </div>
        </div>
    );
};

export default Countries;