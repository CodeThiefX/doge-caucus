const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 flex flex-col lg:flex-row justify-between">
      <div className="flex flex-col w-full lg:w-1/3 pt-16 items-center p-2">
        <img src="logo.PNG" alt="logo" className="w-[450px]" />
        <h1
          className="text-3xl lg:text-5xl font-bold text-white mt-8 text-center"
          style={{
            WebkitTextStroke: "0px black",
            textShadow:
              "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black",
          }}
        >
          For the people,
        </h1>
        <h1
          className="text-3xl lg:text-5xl text-white font-extrabold text-center"
          style={{
            WebkitTextStroke: "0px black",
            textShadow:
              "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black",
          }}
        >
          by the people
        </h1>
        <div className="flex gap-4 py-10 lg:hidden">
          <a className="w-[100px]" href="https://t.me/DogeCaucusSolona">
            <img src="telegram.PNG" alt="telegram" />
          </a>
          <a
            className="w-[100px]"
            href="https://www.dextools.io/app/en/token/dogecaucus?t=1738234953696"
          >
            <img src="dextool.PNG" alt="dextool" />
          </a>
          <a className="w-[100px]" href="https://x.com/dogecaucuscoin?s=21">
            <img src="twitter2.PNG" alt="twitter" />
          </a>
        </div>
      </div>
      <div className="hidden lg:block w-1/3">
        <a
          href="https://x.com/dogecaucuscoin?s=21"
          className="w-[290px] absolute right-14 top-[120px]"
        >
          <img src="twitter.PNG" alt="twitter" />
        </a>
        <a
          href="https://t.me/DogeCaucusSolona"
          className="w-[100px] absolute right-[45px] top-[190px]"
        >
          <img src="telegram.PNG" alt="telegram" />
        </a>
        <a
          href="https://www.dextools.io/app/en/token/dogecaucus?t=1738234953696"
          className="w-[100px] absolute right-[47px] top-[110px]"
        >
          <img src="dextool.PNG" alt="dextool" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
