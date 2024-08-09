import style from "./articles.module.css";

export function Articles() {
  const articles = [
    {
      id: 1,
      title: "7 Best Places to Dive in Indonesia: From Bali to Wakatobi",
      imgUrl:
        "https://www.zamrood.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494005612480-90f50fd9376f%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnw0MjkwNzV8MHwxfHNlYXJjaHwxfHxkaXZpbmclMjBpbmRvbmVzaWF8ZW58MHx8fHwxNjgzMjYwMTYx%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=75",
      slug: "best-time-visit-indonesia-weather-seasons",
    },
    {
      id: 2,
      title: "7 Best Places to Dive in Indonesia: From Bali to Wakatobi",
      imgUrl:
        "https://www.zamrood.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494005612480-90f50fd9376f%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnw0MjkwNzV8MHwxfHNlYXJjaHwxfHxkaXZpbmclMjBpbmRvbmVzaWF8ZW58MHx8fHwxNjgzMjYwMTYx%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=75",
      slug: "best-time-visit-indonesia-weather-seasons",
    },
    {
      id: 3,
      title: "7 Best Places to Dive in Indonesia: From Bali to Wakatobi",
      imgUrl:
        "https://www.zamrood.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494005612480-90f50fd9376f%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnw0MjkwNzV8MHwxfHNlYXJjaHwxfHxkaXZpbmclMjBpbmRvbmVzaWF8ZW58MHx8fHwxNjgzMjYwMTYx%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=75",
      slug: "best-time-visit-indonesia-weather-seasons",
    },
    {
      id: 4,
      title: "7 Best Places to Dive in Indonesia: From Bali to Wakatobi",
      imgUrl:
        "https://www.zamrood.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494005612480-90f50fd9376f%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnw0MjkwNzV8MHwxfHNlYXJjaHwxfHxkaXZpbmclMjBpbmRvbmVzaWF8ZW58MHx8fHwxNjgzMjYwMTYx%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=75",
      slug: "best-time-visit-indonesia-weather-seasons",
    },
    {
      id: 5,
      title: "7 Best Places to Dive in Indonesia: From Bali to Wakatobi",
      imgUrl:
        "https://www.zamrood.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494005612480-90f50fd9376f%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnw0MjkwNzV8MHwxfHNlYXJjaHwxfHxkaXZpbmclMjBpbmRvbmVzaWF8ZW58MHx8fHwxNjgzMjYwMTYx%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=75",
      slug: "best-time-visit-indonesia-weather-seasons",
    },
  ];
  return (
    <>
      <div className="px-5 md:px-24 text-green-tosca">
        <h3 className="">Articles</h3>
        <p className="font-normal text-sm py-3">
          Our curated writings, offering something for every reader.
        </p>
        <div className={"grid lg:grid-cols-4 items-stretch gap-3"}>
          {articles.map((item) => (
            <a
              href={`blog/article/${item.slug}`}
              target="_blank"
              key={item.id}
              className={style.article}
            >
              <div className="">
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="grayscale hover:grayscale-0"
                />
              </div>
              <div className="">
                <h4
                  className="text-white-smoke bg-green-tosca mt-0 p-5 md:py-3 md:text-base 
                "
                >
                  {item.title}
                </h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
