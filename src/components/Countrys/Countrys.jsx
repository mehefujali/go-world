import { useState } from "react";
import Country from "./country";
import { useEffect } from "react";

const Countrys = () => {
      const [countrys, setCountrys] = useState([])
      useEffect(() => {
            fetch('https://restcountries.com/v3.1/all')
                  .then(res => res.json())
                  .then(data => setCountrys(data))
      }, [])

      return (
            <div className=" container mx-auto mt-7">

                  <div className=" grid grid-cols-4 justify-between gap-4">
                        {countrys.map(country => <Country key={country.cca3} country={country}></Country>)}
                  </div>
            </div>
      );
};

export default Countrys;