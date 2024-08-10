import { useGetDestinations } from "api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export function Destinations() {
  const [intervals, setIntervals] = useState(1);

  const { data, isLoading, isError } = useGetDestinations();

  useEffect(() => {
    const interval = setInterval(() => {
      setIntervals((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <div id="destination" className="p-4 text-dark-green">
        <div className="flex flex-col sm:flex-row gap-5 sm:items-center justify-start items-start mb-5">
          <h3 className="text-2xl font-extrabold lg:text-5xl my-3">
            Destinations
          </h3>
          <div>
            <Link
              href={"/destination"}
              className="hover:text-yellow-tan flex gap-3 items-center mb-5"
            >
              <img
                src="assets/svg/common-explore-more.svg"
                alt="Explore more icon"
              />
              <span className="font-medium">EXPLORE MORE</span>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-1">
          {data?.map((item, index) => (
            <div
              className={` lg:grid lg:grid-cols-2 lg:gap-5 lg:my-10`}
              key={item.name}
            >
              <div
                className={twMerge(
                  " w-full overflow-hidden relative aspect-video",
                  index % 2 ? "order-1" : ""
                )}
              >
                {item.imgUrl.map((item, i) => (
                  <img
                    src={item.imgUrl}
                    key={item.imgid}
                    className={twMerge(
                      "absolute inset-0 w-full h-full transition-opacity duration-300",
                      intervals % (i + 1) === 0 ? "opacity-100" : "opacity-0"
                    )}
                  />
                ))}
              </div>

              <div>
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
                    </p>
                  </div>
                  <a href={item.slug}>
                    <button
                      className="rounded-full border-2 border-dark-green text-dark-green font-medium p-2 px-3
              "
                    >
                      See details
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3 justify-center items-center my-5 text-dark-green font-medium">
        <img
          src="/assets/svg/common-explore-more.svg"
          alt="Explore more icon"
        />
        <p>EXPLORE MORE</p>
      </div>
    </>
  );
}
