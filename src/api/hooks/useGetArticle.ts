"use client";

import { useQuery } from "react-query";
import { getArticles } from "api/getArticles";

export function useGetArticle() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["articleData"],
    queryFn: getArticles,
  });

  const article = data?.map((item) => ({
    id: item.id,
    slug: item.slug,
    title: item.title,
    summary: item.summary,
    featuredImageUrl: item.featured_image,
    featuredImageCaption: item.featured_image_caption,
    readTime: item.read_time,
  }));

  console.log(article);

  return {
    data: article,
    isError,
    isLoading,
  };
}
