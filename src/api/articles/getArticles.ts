import { baseApi } from "api/baseApi";
import { ArticleProps, ArticlePublicProps } from "./types/articleProps";

export async function getArticles(): Promise<ArticleProps[]> {
  try {
    const response = await baseApi.get<ArticlePublicProps>("/zamrood/article");
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching article List: ${error}`);
    throw new Error("Failed to fetch article list");
  }
}
