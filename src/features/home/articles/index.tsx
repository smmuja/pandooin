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
      <div className="px-5 md:px-24 text-green-tosca">
        <h3 className="">Articles</h3>
        <p className="font-normal text-sm py-3">
          Our curated writings, offering something for every reader.
        </p>
        <div className={"grid lg:grid-cols-4 items-stretch gap-3"}>
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
