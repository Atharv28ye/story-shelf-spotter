import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  description: string;
  cover: string;
}

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card className="overflow-hidden book-shadow hover:book-shadow-lg transition-smooth cursor-pointer group">
      <div className="aspect-[2/3] overflow-hidden bg-muted">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-4">
        <Badge variant="secondary" className="mb-2">
          {book.genre}
        </Badge>
        <h3 className="font-bold text-lg mb-1 line-clamp-1">{book.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < book.rating
                  ? "fill-accent text-accent"
                  : "text-muted-foreground"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">
            {book.rating}.0
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {book.description}
        </p>
      </CardContent>
    </Card>
  );
};
