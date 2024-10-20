
const Hero = () => {
      return (
            <div className=" h-96 container mx-auto bg-cover  rounded-2xl overflow-hidden flex justify-center items-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?cs=srgb&dl=pexels-pixabay-41949.jpg&fm=jpg)' }}>
                  <div className=" flex flex-col gap-4  justify-center  items-center ">
                        <h1 className=" text-5xl text-center font-bold ">Explore the World</h1>
                        <button className=" btn bg-cyan-400  hover:text-cyan-400 text-black w-fit">Start Explore</button>
                  </div>
            </div>
      );
};

export default Hero;