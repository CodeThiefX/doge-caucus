const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 flex flex-col lg:flex-row justify-between">
      <div className="flex flex-col w-full lg:w-1/3 pt-16 items-center p-2">
        <img src="logo.PNG" alt="logo" className="w-[450px]" />
        <h1
          className="text-3xl lg:text-5xl font-bold text-white mt-8"
          style={{
            WebkitTextStroke: "0px black",
            textShadow:
              "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black",
          }}
        >
          BLAH BLAH BLAH
        </h1>
        <h1
          className="text-3xl lg:text-5xl text-white mt-8 font-extrabold"
          style={{
            WebkitTextStroke: "0px black",
            textShadow:
              "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black",
          }}
        >
          BLAH BLAH
        </h1>
        <div className="flex gap-4 pt-10">
          <a className="w-[100px]">
            <img src="telegram.PNG" alt="telegram" />
          </a>
          <a className="w-[100px]">
            <img src="dextool.PNG" alt="dextool" />
          </a>
        </div>
      </div>
      <div className="hidden lg:block w-1/3">
        <a
          href="https://t.me/dogecaucus_sol"
          className="w-[100px] absolute right-[50px] top-[180px]"
        >
          <img src="telegram.PNG" alt="telegram" />
        </a>
        <a
          href="https://www.dextools.io/app/en/token/dogecaucus?t=1738234953696
"
          className="w-[100px] absolute right-16 top-[100px]"
        >
          <img src="dextool.PNG" alt="dextool" />
        </a>
        <a
          href="https://x.com/DogeCaucus_CTO
"
          className="w-[290px] absolute right-14 top-[110px]"
        >
          <img src="twitter.PNG" alt="twitter" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
