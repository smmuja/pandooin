export function Destinations() {
  const data = [
    {
      id: 1,
      imgUrl:
        "https://www.zamrood.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fpandooin%2Ftr%3Apr-true%2Fproduction%2Fimages%2Fitinerary%2Fpremium-trip-labuan-bajo-liveboard-in-vinca-voyages-phinisi%2FS3TRAnYrcDnQOLgLxUEivqy4gI2Y2ebA18xXjCY4.jpg&w=1920&q=75",
      day: 2,
      title: "[PREMIUM TRIP] Labuan Bajo: Liveboard in VINCA VOYAGES Phinisi",
      organizer: "Pandooin",
      description:
        "We invite you to experience the wonders of Labuan Bajo on an extraordinary adventure aboard a Phinisi boat. Join us on this exclusive journey and enjoy breathtaking natural scenery, beautiful sunsets, and captivating underwater life. Explore exotic islands, snorkel on coral reefs, and savor delicious meals served on board. Let's together create unforgettable holiday memories in Labuan Bajo!",
      price: 7500000,
    },
    {
      id: 2,
      imgUrl:
        "https://www.zamrood.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fpandooin%2Ftr%3Apr-true%2Fproduction%2Fimages%2Fitinerary%2Fpremium-trip-labuan-bajo-liveboard-in-vinca-voyages-phinisi%2FS3TRAnYrcDnQOLgLxUEivqy4gI2Y2ebA18xXjCY4.jpg&w=1920&q=75",
      day: 2,
      title: "[PREMIUM TRIP] Labuan Bajo: Liveboard in VINCA VOYAGES Phinisi",
      organizer: "Pandooin",
      description:
        "We invite you to experience the wonders of Labuan Bajo on an extraordinary adventure aboard a Phinisi boat. Join us on this exclusive journey and enjoy breathtaking natural scenery, beautiful sunsets, and captivating underwater life. Explore exotic islands, snorkel on coral reefs, and savor delicious meals served on board. Let's together create unforgettable holiday memories in Labuan Bajo!",
      price: 7500000,
    },
  ];

  const currencyIDR = new Intl.NumberFormat("en-En", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
  return (
    <>
      <div className="p-4 text-dark-green">
        <h3>Destinations</h3>
        {data.map((item) => (
          <div className="" key={item.id}>
            <img src={item.imgUrl} alt="" />
            <p className="text-xs mt-5">
              {item.day} DAYS {item.day - 1} NIGHTS
            </p>
            <h4 className="text-green-tosca mb-2">{item.title}</h4>
            <p className="text-dark-green text-sm font-medium my-2">
              Organized by {item.organizer}
            </p>
            <p className="text-sm">{item.description}</p>
            <div
              className="flex flex-row justify-between mb-5 mt-3
            "
            >
              <div className="">
                <p className="text-xs mt-3">Start from</p>
                <p className="text-dark-green font-semibold">
                  {currencyIDR.format(item.price)}
                </p>
              </div>
              <a href="">
                <button
                  className="rounded-full border-2 border-dark-green text-dark-green font-medium p-2 px-3
              "
                >
                  See details
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-3 justify-center items-center my-5 text-dark-green font-medium">
        <img src="/assets/svg/common-explore-more.svg" alt="" />
        <p>EXPLORE MORE</p>
      </div>
    </>
  );
}
