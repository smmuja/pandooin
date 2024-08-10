export function BeyondPremium() {
  const data = [
    {
      title: "PERSONALIZED ITINERARIES",
      description:
        "Our premium travel services offer tailor-made itineraries crafted to suit your unique preferences and desires.",
      svg: "/assets/svg/hero-personalized-itineraries.svg",
    },
    {
      title: "EXCLUSIVE EXPERIENCES",
      description:
        "From private charters to behind-the-scenes tours, we offer access to unique opportunities that are designed to elevate your trip to the next level.",
      svg: "/assets/svg/hero-exclusive-experience.svg",
    },
    {
      title: "BEST FACILITIES",
      description:
        "Experience the epitome of with our premium facility, designed to provide an unparalleled level of comfort and indulgence.",
      svg: "/assets/svg/hero-best-facilities.svg",
    },
  ];

  return (
    <>
      <div className="text-center bg-white-smoke px-3 lg:px-80">
        <div>
          <h3 className="font-thesignature text-5xl lg:text-8xl font-normal text-green-tosca mb-2">
            Beyond Premium
          </h3>
          <span className="font-bold font-unbounded text-dark-green lg:text-3xl lg:mb-5">
            ELEVATE YOUR EXPERIENCE
          </span>
          <div className="lg:flex lg:flex-col">
            <div className="lg:flex lg:flex-row">
              {data.map((item) => (
                <div key={item.title}>
                  <div className="flex justify-center lg:flex-row lg:jus">
                    <img src={item.svg} alt={item.title} />
                  </div>
                  <div className="lg:my-5 lg:py-5">
                    <h4 className="text-green-tosca lg:font-normal  lg:text-2xl">
                      {item.title}
                    </h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 lg:flex lg:px-10">
              <div className="flex justify-center lg:w-1/2">
                <img
                  src="/assets/svg/common-discover-tailored-experiences.png"
                  alt=""
                />
              </div>
              <div className="lg:flex lg:flex-col justify-start items-start lg:gap-3">
                <h3 className="font-bold text-2xl text-dark-green">
                  Discover Tailored Experiences
                </h3>
                <p className="text-start">
                  Create your own journey, personalized to suit your preferences
                  and interests, ensuring a once-in-a-lifetime adventure awaits.
                </p>
                <button className="rounded-full p-2 px-3 font-medium text-white-paper bg-dark-green hover:bg-yellow-tan">
                  Customize Your Trip
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center">
        <img src="/assets/svg/common-separator.svg" alt="" className="mt-10" />
      </div>
    </>
  );
}
