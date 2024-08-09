export interface ArticlePublicProps {
  success: boolean;
  message: string;
  code: number;
  data: ArticleProps[];
}

export interface ArticleProps {
  id: string;
  slug: string;
  title: string;
  summary: string;
  featured_image: string;
  featured_image_caption: string;
  read_time: string;
}
