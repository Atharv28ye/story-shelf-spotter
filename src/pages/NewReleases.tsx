import { BookCard } from "@/components/BookCard";
import { booksData } from "@/data/books";
import { BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const NewReleases = () => {
  // Simulate new releases - all books for demo purposes
  const newReleases = booksData;

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
            <Link to="/bestsellers" className="text-sm hover:text-primary transition-smooth">
              Bestsellers
            </Link>
            <Link to="/new-releases" className="text-sm text-primary font-medium">
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
            <Sparkles className="h-10 w-10 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold">New Releases</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fresh stories just waiting to be discovered. Explore the latest additions to our collection.
          </p>
        </div>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Just Arrived</h2>
            <span className="text-sm text-muted-foreground">
              {newReleases.length} {newReleases.length === 1 ? "book" : "books"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newReleases.map((book) => (
              <div key={book.id} className="relative">
                <div className="absolute top-3 right-3 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  NEW
                </div>
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            New books are added regularly to our collection. Check back often to discover fresh stories and voices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-smooth"
            >
              Browse All Books
            </Link>
            <Link 
              to="/bestsellers" 
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full hover:bg-primary/10 transition-smooth"
            >
              View Bestsellers
            </Link>
          </div>
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

export default NewReleases;
