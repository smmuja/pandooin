import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { luxuryFootageImgUrl as imgUrl } from "./data";

export function LuxuryFootages() {
  const [intervals, setIntervals] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIntervals((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-yellow-tan p-10  lg:px-80 ">
        <h3 className="font-thesignature text-5xl font-medium text-dark-green mb-2 sm:text-7xl">
          Luxury Footages
        </h3>
        <div className="lg:hidden relative min-h-80">
          {imgUrl.map((item, i) => (
            <img
              key={item.id}
              src={item.url}
              alt="Luxury footages"
              className={twMerge(
                "h-60 aspect-video absolute lg:col-span-1 lg:static",
                intervals % (i + 1) === 0 ? "opacity-100" : "opacity-0"
              )}
            />
          ))}
        </div>
        {/* Desktop  */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:items-stret ch relative min-h-80 gap-6 ite ms-center just ify-center ">
          {imgUrl.slice(0, 3).map((item, i) => (
            <img
              key={item.id}
              src={item.url}
              alt="Luxury footages"
              className={twMerge(
                "h-80 aspect-video w-full absolute lg:col-span-1 lg:static"
              )}
            />
          ))}
          <div className="col-span-3 flex flex-col w-full justify-center">
            <img src="/assets/svg/common-separator-white.svg" alt="" />
          </div>
          {imgUrl.slice(3).map((item, i) => (
            <img
              key={item.id}
              src={item.url}
              alt="Luxury footages"
              className={twMerge(
                "h-80 aspect-video w-full absolute lg:col-span-1 lg:static"
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
}
