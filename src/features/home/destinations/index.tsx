import { useGetDestinations } from "api";

export function Destinations() {
  const { data, isLoading, isError } = useGetDestinations();

  const currencyIDR = new Intl.NumberFormat("en-En", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <div className="p-4 text-dark-green">
        <h3>Destinations</h3>

        {data?.map((item) => (
          <div className="" key={item.name}>
            {item.imgUrl.map((item) => (
              <img src={item.imgUrl} key={item.imgid} />
            ))}
            <p className="text-xs mt-5">
              {item.day} DAYS {item.day - 1} NIGHTS
            </p>
            <h4 className="text-green-tosca mb-2">{item.name}</h4>
            <p className="text-dark-green text-sm font-medium my-2">
              Organized by {item.partnerName}
            </p>
            <p className="text-sm">{item.shortDescription}</p>
            <div
              className="flex flex-row justify-between mb-5 mt-3
            "
            >
              <div className="">
                <p className="text-xs mt-3">Start from</p>
                <p className="text-dark-green font-semibold">
                  {item.price}
                  {/* {currencyIDR.format(item.price)} */}
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
