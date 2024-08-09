import axios from "axios";
import { ArticleProps, ArticlePublicProps } from "./types/articleProps";

export async function getArticles(): Promise<ArticleProps[]> {
  try {
    const response = await axios.get<ArticlePublicProps>(
      "https://pandooin.com/api/zamrood/article"
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching article List: ${error}`);
    throw new Error("Failed to fetch article list");
  }
}
