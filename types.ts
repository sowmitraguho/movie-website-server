export interface IMovie extends Document {
  id: string;
  title: string;
  releaseDate: Date;
  genre: string[];
  runtime: number; // in minutes
  plotSummary: string;
  posterUrl: string; // URL to a movie poster image
  trailerUrl: string;
  rating: number; // Calculated average rating
  reviewCount: number; // Number of reviews
}