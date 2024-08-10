export function Hero() {
  return (
    <>
      <div className="text-white-paper text-center lg:text-left bg-[url('/assets/img/home-background.webp')] bg-no-repeat bg-cover bg-top mt-0 h-screen sm:pl-4 px-1 pt-36 md:h-4/5 lg:pt-56- 2xl:pt-80 pb-40 sm:pt-48 ">
        <div className="lg:w-2/3 2xl:w-1/2 lg:px-20 2xl:px-32">
          <h3 className="text-7xl xl:text-8xl font-normal font-thesignature text-yellow-tan my-0 mt-10">
            Premium Travel
          </h3>
          <p className="font-bold lg:text-3xl">Beyond Expectation</p>
          <p className="text-sm sm:text-lg lg:text-xl lg:tracking-wider lg:my-3">
            Experience the finest that Indonesia has to offer with our curated
            selection of premium trips, ensuring comfort every step of the way
          </p>
          <a href="#destination">
            <button className="text-sm sm:text-base border sm:border-2 p-2 px-3 my-3 rounded-full font-medium border-white-paper text-white-paper hover:bg-yellow-tan hover:border-transparent">
              Take Me There
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
