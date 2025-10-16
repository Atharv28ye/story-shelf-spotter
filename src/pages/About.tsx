import { BookOpen, Heart, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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
            <Link to="/new-releases" className="text-sm hover:text-primary transition-smooth">
              New Releases
            </Link>
            <Link to="/about" className="text-sm text-primary font-medium">
              About
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About BookDiscover</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your personal guide to discovering the perfect book for every mood, moment, and adventure.
          </p>
        </div>

        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-8 md:p-12 book-shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                BookDiscover was born from a simple idea: everyone deserves to find books they'll love. 
                In a world overflowing with content, we believe the right book at the right time can 
                transform your day, week, or even your life.
              </p>
              <p>
                We've curated a diverse collection spanning every genre imaginable—from heart-pounding 
                mysteries to swoon-worthy romances, from mind-bending sci-fi to soul-searching memoirs. 
                Our mission is to connect readers with stories that resonate.
              </p>
              <p>
                Whether you're looking for your next page-turner or exploring a new genre, we're here 
                to guide you on your reading journey.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 text-center book-shadow hover:book-shadow-lg transition-smooth">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Curated Collection</h3>
              <p className="text-muted-foreground text-sm">
                Handpicked books across all genres to suit every taste
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center book-shadow hover:book-shadow-lg transition-smooth">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reader Ratings</h3>
              <p className="text-muted-foreground text-sm">
                Real reviews from real readers to help you choose
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center book-shadow hover:book-shadow-lg transition-smooth">
              <div className="w-16 h-16 bg-secondary/60 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">For Book Lovers</h3>
              <p className="text-muted-foreground text-sm">
                Built by readers, for readers who live for great stories
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center book-shadow hover:book-shadow-lg transition-smooth">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Driven</h3>
              <p className="text-muted-foreground text-sm">
                Join a community of passionate readers and book enthusiasts
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Discover?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Your next favorite book is waiting. Start exploring our collection and find stories 
            that will captivate, inspire, and transport you to new worlds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-smooth font-medium"
            >
              Start Exploring
            </Link>
            <Link 
              to="/bestsellers" 
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary/10 transition-smooth font-medium"
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

export default About;
