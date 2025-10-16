import { Button } from "@/components/ui/button";

const genres = ["All", "Fiction", "Mystery", "Romance", "Sci-Fi", "Fantasy", "Self-Help"];

interface GenreFilterProps {
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
}

export const GenreFilter = ({ selectedGenre, onGenreChange }: GenreFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {genres.map((genre) => (
        <Button
          key={genre}
          variant={selectedGenre === genre ? "default" : "outline"}
          onClick={() => onGenreChange(genre)}
          className="transition-smooth"
        >
          {genre}
        </Button>
      ))}
    </div>
  );
};
