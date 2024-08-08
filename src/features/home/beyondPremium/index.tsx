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
      <div className="text-center bg-white-smoke">
        <div>
          <h3 className="font-thesignature text-5xl font-normal text-green-tosca mb-2">
            Beyond Premium
          </h3>
          <span className="font-bold font-unbounded text-dark-green">
            ELEVATE YOUR EXPERIENCE
          </span>
          <div>
            {data.map((item) => (
              <div key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="flex justify-center">
                  <img src={item.svg} alt={item.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <div className="flex justify-center">
            <img
              src="/assets/svg/common-discover-tailored-experiences.png"
              alt=""
            />
          </div>
          <h3 className="font-bold text-2xl text-dark-green">
            Discover Tailored Experiences
          </h3>
          <p>
            Create your own journey, personalized to suit your preferences and
            interests, ensuring a once-in-a-lifetime adventure awaits.
          </p>
          <button className="rounded-full p-2 px-3 font-medium text-white-paper bg-dark-green hover:bg-yellow-tan">
            Customize Your Trip
          </button>
        </div>
      </div>
      <img src="/assets/svg/common-separator.svg" alt="" className="mt-10" />
    </>
  );
}
