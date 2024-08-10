import { useGetArticle } from "api/articles/hooks";
import style from "./articles.module.css";

export function Articles() {
  const { data, isLoading, isError } = useGetArticle();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Error fetching data ...</div>;
  }
  return (
    <>
      <div className="px-5 md:px-24 text-green-tosca p-4 lg:py-16 lg:px-80 ">
        <h3 className="lg:text-4xl text-2xl font-extrabold py-3 my-0">
          Articles
        </h3>
        <p className="font-normal text-sm py-3 my-0">
          Our curated writings, offering something for every reader.
        </p>
        <div className={"grid lg:grid-cols-4 items-stretch gap-3 lg:gap-5"}>
          {data?.map((item) => (
            <a
              href={`blog/article/${item.slug}`}
              target="_blank"
              key={item.id}
              className={style.article}
            >
              <div className="">
                <img
                  src={item.featuredImageUrl}
                  alt={item.featuredImageCaption}
                  className="grayscale hover:grayscale-0 aspect-video"
                />
              </div>
              <div className="lg:py-0 lg:mt-0">
                <p
                  className="text-white-smoke bg-green-tosca md:text-base line-clamp-2 lg:font-medium lg:text-sm lg:px-2
                "
                >
                  {item.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
