import { useState } from "react";
import Country from "./country";
import { useEffect } from "react";

const Countrys = () => {
      const [sliceData, setSliceData] = useState(20)
      const [countrys, setCountrys] = useState([])
      const [visitedCountrys, setVisitedCountrys] = useState([])


      useEffect(() => {
            fetch('https://restcountries.com/v3.1/all')
                  .then(res => res.json())
                  .then(data => setCountrys(data.slice(0, sliceData)))
      }, [sliceData])
      useEffect(() => {
            fetch(`https://restcountries.com/v3.1/name/{}`)
      }, [])

      const handelSeeMore = () => {
            setSliceData(sliceData + 20)
      }
      const handelVisitedCountrys = (country) => {

            const newVisitedC = [...visitedCountrys, country]
            setVisitedCountrys(newVisitedC)


      }

      return (
            <div className=" container mx-auto my-7">
                  <div className="my-7 min-h-12 flex gap-2 overflow-x-scroll border p-3 scroll-m-1 border-cyan-500 rounded-lg">
                        {visitedCountrys.map(flags =>
                              <img className=" w-24 h-10" src={flags} alt="" />
                        )}
                  </div>

                  <div className=" w-11/12 mx-auto md:w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 justify-between gap-4 ">
                        {countrys.map(country => <Country handelVisitedCountrys={handelVisitedCountrys} key={country.cca3} country={country}></Country>)}
                  </div>
                  <div className=" w-full flex  justify-center"><button className={` btn text-center my-7 border-cyan-400 text-cyan-400 ${countrys.length == 250 && 'hidden'}`} onClick={handelSeeMore}>See more...</button></div>
            </div>
      );
};

export default Countrys;