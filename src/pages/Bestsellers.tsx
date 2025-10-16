import { BookCard } from "@/components/BookCard";
import { booksData } from "@/data/books";
import { BookOpen, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Bestsellers = () => {
  // Simulate bestseller ranking - top rated books
  const bestsellers = booksData
    .filter((book) => book.rating >= 4)
    .sort((a, b) => b.rating - a.rating);

  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">BookDiscover</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-sm hover:text-primary transition-smooth">
              Home
            </Link>
            <Link to="/bestsellers" className="text-sm text-primary font-medium">
              Bestsellers
            </Link>
            <Link to="/new-releases" className="text-sm hover:text-primary transition-smooth">
              New Releases
            </Link>
            <Link to="/about" className="text-sm hover:text-primary transition-smooth">
              About
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="h-10 w-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">Bestsellers</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most loved books by our readers. These top-rated titles have captured hearts and minds across genres.
          </p>
        </div>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Top Rated Books</h2>
            <span className="text-sm text-muted-foreground">
              {bestsellers.length} {bestsellers.length === 1 ? "book" : "books"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bestsellers.map((book, index) => (
              <div key={book.id} className="relative">
                <div className="absolute -top-2 -left-2 z-10 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg book-shadow">
                  {index + 1}
                </div>
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-secondary/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Why These Books?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Our bestsellers are determined by reader ratings and reviews. Each book has earned its place through genuine reader appreciation and engagement.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-smooth"
          >
            Explore All Books
          </Link>
        </section>
      </main>

      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 BookDiscover. Find your next adventure in reading.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Bestsellers;
