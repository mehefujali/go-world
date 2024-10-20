import { useState } from "react";
import Country from "./country";
import { useEffect } from "react";

const Countrys = () => {
      const [sliceData, setSliceData] = useState(20)
      const [countrys, setCountrys] = useState([])
      useEffect(() => {
            fetch('https://restcountries.com/v3.1/all')
                  .then(res => res.json())
                  .then(data => setCountrys(data.slice(0, sliceData)))
      }, [sliceData])

      const handelSeeMore = () => {
            setSliceData(sliceData + 20)
      }

      return (
            <div className=" container mx-auto mt-7">

                  <div className=" w-11/12 mx-auto md:w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 justify-between gap-4 ">
                        {countrys.map(country => <Country key={country.cca3} country={country}></Country>)}
                  </div>
                  <div className=" w-full flex  justify-center"><button className={` btn text-center my-7 border-cyan-400 text-cyan-400 ${countrys.length == 250 && 'hidden'}`} onClick={handelSeeMore}>See more...</button></div>
            </div>
      );
};

export default Countrys;