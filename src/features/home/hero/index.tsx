export function Hero() {
  return (
    <>
      <img src="/assets/img/home-background.webp" alt="" />
      <div className="text-white-paper text-center absolute top-14 left-1/4">
        <h3 className="text-9xl font-normal font-thesignature text-yellow-tan leading-10">
          Premium Travel
        </h3>
        <p className="font-bold text-2xl">Beyond Expectation</p>
        <p>
          Experience the finest that Indonesia has to offer with our curated
          selection of premium trips, ensuring comfort every step of the way
        </p>
        <a href="">
          <button className="border-2 p-2 px-3 my-3 rounded-full font-medium border-white-paper text-white-paper hover:bg-yellow-tan hover:border-transparent">
            Take Me There
          </button>
        </a>
      </div>
    </>
  );
}
