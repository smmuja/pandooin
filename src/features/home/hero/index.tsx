export function Hero() {
  return (
    <>
      <div className="text-white-paper text-center bg-[url('/assets/img/home-background.webp')] mt-0 h-full pt-28 ">
        <h3 className="text-7xl xl:text-9xl font-normal font-thesignature text-yellow-tan my-0 mt-10">
          Premium Travel
        </h3>
        <p className="font-bold lg:text-2xl">Beyond Expectation</p>
        <p className="text-sm sm:text-base">
          Experience the finest that Indonesia has to offer with our curated
          selection of premium trips, ensuring comfort every step of the way
        </p>
        <a href="">
          <button className="text-sm sm:text-base border-2 p-2 px-3 my-3 rounded-full font-medium border-white-paper text-white-paper hover:bg-yellow-tan hover:border-transparent">
            Take Me There
          </button>
        </a>
      </div>
    </>
  );
}
