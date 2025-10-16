import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { GenreFilter } from "@/components/GenreFilter";
import { BookCard } from "@/components/BookCard";
import { booksData } from "@/data/books";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = booksData.filter((book) => {
    const matchesGenre = selectedGenre === "All" || book.genre === selectedGenre;
    const matchesSearch =
      searchQuery === "" ||
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">BookDiscover</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-sm text-primary font-medium">
              Home
            </Link>
            <Link to="/bestsellers" className="text-sm hover:text-primary transition-smooth">
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

      <HeroSection onSearch={handleSearch} />

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-2">
            Browse by Genre
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Find your perfect book match
          </p>
          <GenreFilter
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
          />
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {searchQuery
                ? `Search Results for "${searchQuery}"`
                : selectedGenre === "All"
                ? "Featured Books"
                : `${selectedGenre} Books`}
            </h2>
            <span className="text-sm text-muted-foreground">
              {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"}
            </span>
          </div>

          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No books found. Try a different search or genre.
              </p>
            </div>
          )}
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

export default Index;
