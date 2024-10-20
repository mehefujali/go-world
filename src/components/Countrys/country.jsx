
const Country = ({ country }) => {
      const { name, flags, currencies, timezones } = country
      const currenciesName = Object.values(currencies || {})
      console.log(currenciesName);


      return (
            <div className=" flex flex-col gap-2 border border-gray-400 shadow-md shadow-black p-4 rounded-lg">
                  <img className=" w-32 h-20" src={flags.png} alt="" />
                  <h1 className=" text-2xl font-bold">{name.common}</h1>
                  <p>Courrencies :{currenciesName?.[0]?.name} </p>
                  <p>Symbol :  {currenciesName?.[0]?.symbol} </p>
                  <p>Time zones :  {timezones[0]} </p>
            </div>
      );
};

export default Country;