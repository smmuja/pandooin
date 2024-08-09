export function LuxuryFootages() {
  const imgUrl = [
    {
      id: 1,
      url: "https://www.zamrood.com/_next/image?url=%2Fimages%2Ffootages%2Ffootage-1.webp&w=1920&q=75",
    },
    {
      id: 2,
      url: "https://www.zamrood.com/_next/image?url=%2Fimages%2Ffootages%2Ffootage-2.jpg&w=1920&q=75",
    },
    {
      id: 3,
      url: "https://www.zamrood.com/_next/image?url=%2Fimages%2Ffootages%2Ffootage-3.webp&w=1920&q=75",
    },
    {
      id: 4,
      url: "https://www.zamrood.com/_next/image?url=%2Fimages%2Ffootages%2Ffootage-4.jpg&w=1920&q=75",
    },
    {
      id: 5,
      url: "https://www.zamrood.com/_next/image?url=%2Fimages%2Ffootages%2Ffootage-5.jpg&w=1920&q=75",
    },
    {
      id: 6,
      url: "https://www.zamrood.com/_next/image?url=%2Fimages%2Ffootages%2Ffootage-6.jpg&w=1920&q=75",
    },
  ];
  return (
    <>
      <div className="bg-yellow-tan p-5">
        <h3 className="font-thesignature text-5xl font-medium text-dark-green mb-2 sm:text-7xl">
          Luxury Footages
        </h3>
        <div className="lg:grid grid-cols-3">
          {imgUrl.map((item) => (
            <img
              key={item.id}
              src={item.url}
              alt="Luxury footages"
              className="
                p-5 h-80"
            />
          ))}
        </div>
      </div>
      <div className=" text-white-paper flex flex-col md:flex-row md:justify-between justify-center items-center p-5 m-5 my-16 bg-no-repeat bg-cover bg-center  bg-[url('/assets/img/background-visit-website.png')]">
        <div>
          <img src="/assets/img/zamrood-logo-white.png" alt="" />
        </div>
        <div>
          <p>Want to see other destinations? Check us out at our website</p>
          <a href="" className="flex gap-1">
            <span>Pandooin.com</span>
            <img src="/assets/svg/common-arrow.svg" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
