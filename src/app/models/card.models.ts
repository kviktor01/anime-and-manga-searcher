export interface Card{
  id: number
  imageUrl: string;
  title: string;
  author: string;
  synopsis: string;
  score: number;
  releaseStart: string;
  releaseEnd?: string;
}
