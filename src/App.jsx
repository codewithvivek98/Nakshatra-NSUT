import React, { useState, useEffect } from "react";
import {
  Star,
  Moon,
  Sun,
  Calendar,
  Users,
  Mail,
  Phone,
  MapPin,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Menu,
  X,
  ChevronRight,
  Eye,
  Clock,
  User,
  ExternalLink,
  Camera,
  Video,
  Link,
} from "lucide-react";

// Navigation Component
const Navigation = ({
  currentPage,
  setCurrentPage,
  darkMode,
  toggleDarkMode,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pages = [
    { id: "home", name: "Home" },
    { id: "about", name: "About Us" },
    { id: "events", name: "Events" },
    { id: "gallery", name: "Gallery" },
    { id: "members", name: "Members" },
    { id: "blog", name: "Blog" },
    { id: "contact", name: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        darkMode
          ? "bg-gray-900/90 backdrop-blur-md border-b border-purple-500/20"
          : "bg-white/90 backdrop-blur-md border-b border-gray-200"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            <div className="relative">
              <Star
                className={`w-8 h-8 ${
                  darkMode ? "text-purple-400" : "text-purple-600"
                }`}
              />
              <div className="absolute inset-0 animate-pulse">
                <Star
                  className={`w-8 h-8 ${
                    darkMode ? "text-purple-300" : "text-purple-500"
                  } opacity-50`}
                />
              </div>
            </div>
            <span
              className={`text-xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Nakshatra NSUT
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className={`transition-colors duration-200 ${
                  currentPage === page.id
                    ? darkMode
                      ? "text-purple-400"
                      : "text-purple-600"
                    : darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {page.name}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                darkMode
                  ? "bg-gray-800 text-yellow-400"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                darkMode
                  ? "bg-gray-800 text-yellow-400"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${darkMode ? "text-white" : "text-gray-900"}`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden py-4 border-t ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  setCurrentPage(page.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-3 transition-colors ${
                  currentPage === page.id
                    ? darkMode
                      ? "text-purple-400"
                      : "text-purple-600"
                    : darkMode
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >
                {page.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Blog Page Component
const BlogPage = ({ darkMode }) => {
  const blogPosts = [
    {
      id: 1,
      title: "The James Webb Space Telescope: Revolutionary Discoveries",
      excerpt:
        "Explore the groundbreaking findings from JWST and how they're reshaping our understanding of the early universe.",
      author: "Dr. Arjun Sharma",
      date: "December 15, 2025",
      readTime: "8 min read",
      category: "Space Technology",
      image: "🔭",
    },
    {
      id: 2,
      title: "Astrophotography Tips for Beginners",
      excerpt:
        "Learn the essential techniques and equipment needed to capture stunning images of celestial objects.",
      author: "Priya Patel",
      date: "December 10, 2025",
      readTime: "6 min read",
      category: "Photography",
      image: "📸",
    },
    {
      id: 3,
      title: "Understanding Exoplanets: Worlds Beyond Our Solar System",
      excerpt:
        "A comprehensive guide to exoplanet discovery methods and the most fascinating worlds we've found.",
      author: "Rohit Kumar",
      date: "December 5, 2025",
      readTime: "10 min read",
      category: "Planetary Science",
      image: "🌍",
    },
    {
      id: 4,
      title: "The Future of Mars Exploration",
      excerpt:
        "Examining upcoming missions to Mars and the possibility of human colonization.",
      author: "Sneha Reddy",
      date: "November 28, 2025",
      readTime: "7 min read",
      category: "Space Exploration",
      image: "🚀",
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h1
          className={`text-5xl font-bold text-center mb-16 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Astronomy Blog
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  darkMode={darkMode}
                  className="overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                      <div className="text-6xl p-8">{post.image}</div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span
                          className={`text-sm ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {post.readTime}
                        </span>
                      </div>
                      <h2
                        className={`text-2xl font-bold mb-3 hover:text-purple-600 cursor-pointer transition-colors ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {post.title}
                      </h2>
                      <p
                        className={`mb-4 ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span
                            className={`text-sm ${
                              darkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {post.author}
                          </span>
                          <span
                            className={`text-sm ${
                              darkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            • {post.date}
                          </span>
                        </div>
                        <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1">
                          <span>Read More</span>
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card darkMode={darkMode} className="p-6">
              <h3
                className={`text-xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Categories
              </h3>
              <div className="space-y-2">
                {[
                  "Space Technology",
                  "Photography",
                  "Planetary Science",
                  "Space Exploration",
                  "Cosmology",
                ].map((category) => (
                  <button
                    key={category}
                    className={`block w-full text-left py-2 px-3 rounded transition-colors ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Card>

            {/* Recent Posts */}
            <Card darkMode={darkMode} className="p-6">
              <h3
                className={`text-xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Recent Posts
              </h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <div
                    key={post.id}
                    className="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-b-0"
                  >
                    <h4
                      className={`font-medium mb-1 hover:text-purple-600 cursor-pointer transition-colors ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {post.title}
                    </h4>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {post.date}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h1
          className={`text-5xl font-bold text-center mb-16 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Contact & Join Us
        </h1>

        <div className="flex-col items-center justify-center gap-12  max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card darkMode={darkMode} className="p-8">
              <h2
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-500" />
                  <span
                    className={darkMode ? "text-gray-300" : "text-gray-600"}
                  >
                    nakshatra@college.edu
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-500" />
                  <span
                    className={darkMode ? "text-gray-300" : "text-gray-600"}
                  >
                    +91 98765 43210
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-500" />
                  <span
                    className={darkMode ? "text-gray-300" : "text-gray-600"}
                  >
                    Physics Department, Main Campus
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Link className="w-5 h-5 text-purple-500" />
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSendU-O025t4wwkS94j9ERYQVLGcOp-FNhzZDXZssgZwkQt-Q/closedform?fbclid=PAQ0xDSwMWuLZleHRuA2FlbQIxMAABpwo2TmWwGBN7ryOBRqFEbS5sL8gX543Tlus8g_FwGgSe0x3-ACfx4wqNBY7y_aem_v5rMtHEHtvK5h8zcEW_FDw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      darkMode
                        ? "text-gray-300 hover:text-purple-400"
                        : "text-gray-600 hover:text-purple-600"
                    }
                  >
                    Registration Link
                  </a>
                </div>
              </div>
            </Card>

            <Card darkMode={darkMode} className="p-8">
              <h2
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Follow Us
              </h2>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/nakshatra_nsut?igsh=bmYwcHc1cHlmODBw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-colors ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <Instagram className="w-6 h-6 text-pink-500" />
                </a>

                <a
                  href="https://www.linkedin.com/company/nakshatra-nsut/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-colors ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <Linkedin className="w-6 h-6 text-blue-700" />
                </a>
              </div>
            </Card>

            <Card darkMode={darkMode} className="p-8">
              <h2
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Office Hours
              </h2>
              <div
                className={`space-y-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>5:00 PM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>2:00 PM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`py-12 mt-20 ${
        darkMode
          ? "bg-gray-900 border-t border-gray-800"
          : "bg-gray-50 border-t border-gray-200"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-purple-500" />
              <span
                className={`text-lg font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Nakshatra Nsut
              </span>
            </div>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Exploring the cosmos, one star at a time. Join our journey to
              understand the universe.
            </p>
          </div>

          <div>
            <h3
              className={`font-semibold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Links
            </h3>
            <div
              className={`space-y-2 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <div >About Us</div>
              <div>Events</div>
              <div>Gallery</div>
              <div>Contact</div>
            </div>
          </div>

          <div>
            <h3
              className={`font-semibold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Resources
            </h3>
            <div
              className={`space-y-2 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <div>Blog</div>
              <div>Observatory</div>
              <div>Equipment</div>
              <div>Research</div>
            </div>
          </div>

          <div>
            <h3
              className={`font-semibold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Connect
            </h3>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/nakshatra_nsut?igsh=bmYwcHc1cHlmODBw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 hover:opacity-80"
              >
                <Instagram className="w-5 h-5 text-pink-500" />
                <span className="hidden sm:inline"></span>
              </a>
              <a
                href="https://www.linkedin.com/company/nakshatra-nsut/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-700" />
              </a>
            </div>
          </div>
        </div>

        <div
          className={`mt-8 pt-8 border-t text-center text-sm ${
            darkMode
              ? "border-gray-800 text-gray-400"
              : "border-gray-200 text-gray-600"
          }`}
        >
          © 2025 Nakshatra Astronomy Society. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage darkMode={darkMode} />;
      case "about":
        return <AboutPage darkMode={darkMode} />;
      case "events":
        return <EventsPage darkMode={darkMode} />;
      case "gallery":
        return <GalleryPage darkMode={darkMode} />;
      case "members":
        return <MembersPage darkMode={darkMode} />;
      case "blog":
        return <BlogPage darkMode={darkMode} />;
      case "contact":
        return <ContactPage darkMode={darkMode} />;
      default:
        return <HomePage darkMode={darkMode} />;
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white"
          : "bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50 text-gray-900"
      }`}
    >
      <AnimatedBackground darkMode={darkMode} />
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <main className="relative z-10">{renderPage()}</main>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;

// Animated Background Component
const AnimatedBackground = ({ darkMode }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          animationDelay: Math.random() * 3,
          duration: Math.random() * 3 + 2,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  if (!darkMode) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

// Hero Section Component
const HeroSection = ({ darkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Explore the Universe",
      subtitle: "Join us in discovering the mysteries of the cosmos",
      image: "🌌",
    },
    {
      title: "Stellar Observations",
      subtitle: "Experience the wonders of astronomy through our telescopes",
      image: "🔭",
    },
    {
      title: "Cosmic Community",
      subtitle: "Connect with fellow astronomy enthusiasts",
      image: "✨",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="text-center z-10 px-4">
        <div className="text-8xl mb-6 animate-bounce">
          {slides[currentSlide].image}
        </div>
        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {slides[currentSlide].title}
        </h1>
        <p
          className={`text-xl md:text-2xl mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {slides[currentSlide].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Join Our Society
          </button>
          <button
            className={`border-2 px-8 py-3 rounded-lg font-semibold transition-colors ${
              darkMode
                ? "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900"
                : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            }`}
          >
            Explore Events
          </button>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide
                  ? "bg-purple-600"
                  : darkMode
                  ? "bg-gray-600"
                  : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Card Component
const Card = ({ children, className = "", darkMode }) => (
  <div
    className={`rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
      darkMode
        ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700"
        : "bg-white border border-gray-200"
    } ${className}`}
  >
    {children}
  </div>
);

// Home Page Component
const HomePage = ({ darkMode }) => {
  const highlights = [
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      title: "200+ Members",
      description: "Active astronomy enthusiasts",
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-400" />,
      title: "50+ Events",
      description: "Stargazing sessions & workshops",
    },
    {
      icon: <Eye className="w-8 h-8 text-green-400" />,
      title: "Professional Telescopes",
      description: "High-quality observation equipment",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection darkMode={darkMode} />

      {/* Highlights Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-16 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Society Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} darkMode={darkMode} className="p-8 text-center">
                <div className="flex justify-center mb-4">{highlight.icon}</div>
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {highlight.title}
                </h3>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card darkMode={darkMode} className="p-8">
              <h3
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Upcoming Events
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  <span
                    className={darkMode ? "text-gray-300" : "text-gray-600"}
                  >
                    Lunar Eclipse Viewing - Dec 28, 2025
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  <span
                    className={darkMode ? "text-gray-300" : "text-gray-600"}
                  >
                    Astrophotography Workshop - Jan 5, 2026
                  </span>
                </div>
              </div>
            </Card>

            <Card darkMode={darkMode} className="p-8">
              <h3
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Latest News
              </h3>
              <div className="space-y-4">
                <div>
                  <h4
                    className={`font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    New Telescope Acquired
                  </h4>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    We've added a professional-grade telescope to our
                    collection...
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

// About Page Component
const AboutPage = ({ darkMode }) => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1
            className={`text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About Nakshatra
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Founded in 2018, Nakshatra is the premier astronomy society
            dedicated to exploring the wonders of the universe and fostering a
            love for space science among students and enthusiasts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card darkMode={darkMode} className="p-8">
            <h2
              className={`text-3xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Our Mission
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              To inspire curiosity about the cosmos, provide hands-on learning
              experiences in astronomy, and build a community of passionate
              stargazers and space enthusiasts who contribute to astronomical
              research and education.
            </p>
          </Card>

          <Card darkMode={darkMode} className="p-8">
            <h2
              className={`text-3xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              What We Do
            </h2>
            <ul
              className={`space-y-3 text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-5 h-5 text-purple-500" />
                <span>Regular stargazing sessions</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-5 h-5 text-purple-500" />
                <span>Astrophotography workshops</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-5 h-5 text-purple-500" />
                <span>Guest lectures by astronomers</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-5 h-5 text-purple-500" />
                <span>Observatory visits and trips</span>
              </li>
            </ul>
          </Card>
        </div>

        <Card darkMode={darkMode} className="p-8 mb-16">
          <h2
            className={`text-3xl font-bold mb-6 text-center ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className={`text-4xl font-bold text-purple-500 mb-2`}>7</div>
              <div className={darkMode ? "text-gray-300" : "text-gray-600"}>
                Years of Excellence
              </div>
            </div>
            <div className="text-center">
              <div className={`text-4xl font-bold text-blue-500 mb-2`}>15</div>
              <div className={darkMode ? "text-gray-300" : "text-gray-600"}>
                Awards Won
              </div>
            </div>
            <div className="text-center">
              <div className={`text-4xl font-bold text-green-500 mb-2`}>
                500+
              </div>
              <div className={darkMode ? "text-gray-300" : "text-gray-600"}>
                Lives Touched
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Events Page Component
const EventsPage = ({ darkMode }) => {
  const upcomingEvents = [
    {
      title: "Lunar Eclipse Viewing Party",
      date: "December 28, 2025",
      time: "8:00 PM - 11:00 PM",
      location: "College Observatory",
      description:
        "Join us for a spectacular viewing of the total lunar eclipse with our telescopes and expert guidance.",
      type: "Observation",
    },
    {
      title: "Astrophotography Workshop",
      date: "January 5, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "Physics Lab & Observatory",
      description:
        "Learn the art of capturing celestial objects with professional equipment and editing techniques.",
      type: "Workshop",
    },
    {
      title: "Guest Lecture: Black Holes",
      date: "January 15, 2026",
      time: "6:00 PM - 7:30 PM",
      location: "Main Auditorium",
      description:
        "Dr. Sarah Chen from ISRO will discuss recent discoveries about black holes and event horizons.",
      type: "Lecture",
    },
  ];

  const pastEvents = [
    {
      title: "Perseid Meteor Shower 2025",
      date: "August 12, 2025",
      attendees: 85,
      description:
        "Successfully observed over 60 meteors per hour during peak activity.",
    },
    {
      title: "Mars Opposition Viewing",
      date: "November 18, 2025",
      attendees: 120,
      description:
        "Spectacular views of Mars at its closest approach to Earth.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h1
          className={`text-5xl font-bold text-center mb-16 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Events & Activities
        </h1>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2
            className={`text-3xl font-bold mb-8 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                darkMode={darkMode}
                className="p-6 hover:transform hover:scale-105 transition-transform"
              >
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.type === "Observation"
                        ? "bg-blue-100 text-blue-800"
                        : event.type === "Workshop"
                        ? "bg-green-100 text-green-800"
                        : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {event.type}
                  </span>
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {event.title}
                </h3>
                <div
                  className={`space-y-2 mb-4 text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {event.description}
                </p>
                <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Register Now
                </button>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2
            className={`text-3xl font-bold mb-8 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Past Events
          </h2>
          <div className="space-y-6">
            {pastEvents.map((event, index) => (
              <Card key={index} darkMode={darkMode} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {event.title}
                    </h3>
                    <p
                      className={`mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {event.description}
                    </p>
                    <div
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {event.date} • {event.attendees} attendees
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};




const GalleryPage = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "events", "astrophotography", "equipment"];

  const galleryItems = [
    {
      id: 1,
      type: "image",
      category: "events",
      title: "Perseid Meteor Shower 2025",
      icon: "🌠",
      imageUrl: "https://thf.bing.com/th?id=OIF.YO0rNOpsCaHw47cEL9%2fBow&w=312&h=180&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3",
    },
    {
      id: 2,
      type: "image",
      category: "astrophotography",
      title: "Andromeda Galaxy",
      icon: "🌌",
      imageUrl: "https://images.wallpapersden.com/image/download/the-andromeda-galaxy_bGZlbWyUmZqaraWkpJRmbmdlrWZnZWU.jpg",
    },
    {
      id: 3,
      type: "image",
      category: "equipment",
      title: "New Telescope Setup",
      icon: "🔭",
      imageUrl: "https://img.freepik.com/premium-photo/illustration-ultra-realistic-4k-image-modern-telescope_756405-53591.jpg?w=2000",
    },
    {
      id: 4,
      type: "image",
      category: "astrophotography",
      title: "Orion Nebula",
      icon: "✨",
      imageUrl: "https://tse4.mm.bing.net/th/id/OIP.lJZlsgOdFq_xfpcDOkozNAHaEo?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 5,
      type: "image",
      category: "events",
      title: "Group Stargazing Session",
      icon: "👥",
      imageUrl: "https://www.mumbaipuneadventures.com/wp-content/uploads/2019/01/stargazing-1024x485.jpg",
    },
    {
      id: 6,
      type: "image",
      category: "astrophotography",
      title: "Saturn Rings",
      icon: "🪐",
      imageUrl: "https://4kwallpapers.com/images/wallpapers/saturn-outer-space-2880x1800-12084.jpg",
    },
    {
      id: 7,
      type: "image",
      category: "equipment",
      title: "Observatory Interior",
      icon: "🏢",
      imageUrl: "https://wallpaperaccess.com/full/5850837.jpg",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h1
          className={`text-5xl font-bold text-center mb-16 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Gallery & Media
        </h1>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div
            className={`flex space-x-2 p-1 rounded-lg ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                  activeCategory === category
                    ? "bg-purple-600 text-white"
                    : darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {category === "all" ? "All Media" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              darkMode={darkMode}
              className="group cursor-pointer overflow-hidden hover:transform hover:scale-105 transition-all"
            >
              <div className="relative aspect-video flex items-center justify-center overflow-hidden rounded-lg">
                {item.type === "image" && item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : item.type === "video" && item.videoUrl ? (
                  <video
                    src={item.videoUrl}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <div className="text-6xl opacity-80">{item.icon}</div>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3
                  className={`font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm capitalize ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {item.category}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      item.type === "video"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-purple-500 mb-2">500+</div>
              <div
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Photos Captured
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
              <div
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Videos Recorded
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">25+</div>
              <div
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Events Documented
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};






// Gallery Page Component
// const GalleryPage = ({ darkMode }) => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const categories = ["all", "events", "astrophotography", "equipment"];

//   const galleryItems = [
//     {
//       id: 1,
//       type: "image",
//       category: "events",
//       title: "Perseid Meteor Shower 2025",
//       icon: "🌠",
//       imageUrl: "https://thf.bing.com/th?id=OIF.YO0rNOpsCaHw47cEL9%2fBow&w=312&h=180&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3" 
//     },
//     {
//       id: 2,
//       type: "image",
//       category: "astrophotography",
//       title: "Andromeda Galaxy",
//       icon: "🌌",
//     },
//     {
//       id: 3,
//       type: "video",
//       category: "events",
//       title: "Lunar Eclipse Timelapse",
//       icon: "🌙",
//     },
//     {
//       id: 4,
//       type: "image",
//       category: "equipment",
//       title: "New Telescope Setup",
//       icon: "🔭",
//     },
//     {
//       id: 5,
//       type: "image",
//       category: "astrophotography",
//       title: "Orion Nebula",
//       icon: "✨",
//     },
//     {
//       id: 6,
//       type: "image",
//       category: "events",
//       title: "Group Stargazing Session",
//       icon: "👥",
//     },
//     {
//       id: 7,
//       type: "image",
//       category: "astrophotography",
//       title: "Saturn Rings",
//       icon: "🪐",
//     },
//     {
//       id: 8,
//       type: "video",
//       category: "events",
//       title: "Workshop Highlights",
//       icon: "📚",
//     },
//     {
//       id: 9,
//       type: "image",
//       category: "equipment",
//       title: "Observatory Interior",
//       icon: "🏢",
//     },
//   ];

//   const filteredItems =
//     activeCategory === "all"
//       ? galleryItems
//       : galleryItems.filter((item) => item.category === activeCategory);

//   return (
//     <div className="min-h-screen pt-24 px-4">
//       <div className="container mx-auto">
//         <h1
//           className={`text-5xl font-bold text-center mb-16 ${
//             darkMode ? "text-white" : "text-gray-900"
//           }`}
//         >
//           Gallery & Media
//         </h1>

//         {/* Category Filter */}
//         <div className="flex justify-center mb-12">
//           <div
//             className={`flex space-x-2 p-1 rounded-lg ${
//               darkMode ? "bg-gray-800" : "bg-gray-100"
//             }`}
//           >
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-4 py-2 rounded-lg capitalize transition-colors ${
//                   activeCategory === category
//                     ? "bg-purple-600 text-white"
//                     : darkMode
//                     ? "text-gray-300 hover:text-white"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 {category === "all" ? "All Media" : category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredItems.map((item) => (
//             <Card
//               key={item.id}
//               darkMode={darkMode}
//               className="group cursor-pointer overflow-hidden hover:transform hover:scale-105 transition-all"
//             >
//               <div className="relative aspect-video bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
//                 <div className="relative aspect-video flex items-center justify-center overflow-hidden rounded-lg">
//   {item.imageUrl ? (
//     <img
//       src={item.imageUrl}
//       alt={item.title}
//       className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//     />
//   ) : (
//     <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
//       <div className="text-6xl opacity-80">{item.icon}</div>
//     </div>
//   )}

//   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
//     <div className="opacity-0 group-hover:opacity-100 transition-opacity">
//       {item.type === "video" ? (
//         <Video className="w-8 h-8 text-white" />
//       ) : (
//         <Camera className="w-8 h-8 text-white" />
//       )}
//     </div>
//   </div>
// </div>

//                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
//                   <div className="opacity-0 group-hover:opacity-100 transition-opacity">
//                     {item.type === "video" ? (
//                       <Video className="w-8 h-8 text-white" />
//                     ) : (
//                       <Camera className="w-8 h-8 text-white" />
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3
//                   className={`font-semibold mb-2 ${
//                     darkMode ? "text-white" : "text-gray-900"
//                   }`}
//                 >
//                   {item.title}
//                 </h3>
//                 <div className="flex items-center justify-between">
//                   <span
//                     className={`text-sm capitalize ${
//                       darkMode ? "text-gray-400" : "text-gray-500"
//                     }`}
//                   >
//                     {item.category}
//                   </span>
//                   <span
//                     className={`text-xs px-2 py-1 rounded ${
//                       item.type === "video"
//                         ? "bg-red-100 text-red-700"
//                         : "bg-blue-100 text-blue-700"
//                     }`}
//                   >
//                     {item.type}
//                   </span>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="mt-16 text-center">
//           <div className="grid md:grid-cols-3 gap-8">
//             <div>
//               <div className="text-3xl font-bold text-purple-500 mb-2">
//                 500+
//               </div>
//               <div
//                 className={`text-lg ${
//                   darkMode ? "text-gray-300" : "text-gray-600"
//                 }`}
//               >
//                 Photos Captured
//               </div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
//               <div
//                 className={`text-lg ${
//                   darkMode ? "text-gray-300" : "text-gray-600"
//                 }`}
//               >
//                 Videos Recorded
//               </div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-green-500 mb-2">25+</div>
//               <div
//                 className={`text-lg ${
//                   darkMode ? "text-gray-300" : "text-gray-600"
//                 }`}
//               >
//                 Events Documented
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Members Page Component
const MembersPage = ({ darkMode }) => {
  const executiveBoard = [
    {
      name: "Vivek kumar",
      position: "President",
      year: "4th Year",
      specialization: "Astrophysics",
      image: "👨‍🚀",
    },
    {
      name: "Priya Patel",
      position: "Vice President",
      year: "3rd Year",
      specialization: "Planetary Science",
      image: "👩‍🚀",
    },
    {
      name: "Rohit Kumar",
      position: "Secretary",
      year: "3rd Year",
      specialization: "Observational Astronomy",
      image: "👨‍🔬",
    },
    {
      name: "Sneha Reddy",
      position: "Treasurer",
      year: "2nd Year",
      specialization: "Astrophotography",
      image: "👩‍💻",
    },
  ];

  const members = [
    {
      name: "Vikash Singh",
      year: "4th Year",
      specialization: "Cosmology",
      image: "👨‍🎓",
    },
    {
      name: "Ananya Gupta",
      year: "3rd Year",
      specialization: "Solar Physics",
      image: "👩‍🎓",
    },
    {
      name: "Karan Mehta",
      year: "2nd Year",
      specialization: "Galactic Astronomy",
      image: "👨‍💼",
    },
    {
      name: "Ritika Jain",
      year: "2nd Year",
      specialization: "Astrobiology",
      image: "👩‍🔬",
    },
    {
      name: "Aditya Verma",
      year: "1st Year",
      specialization: "Telescope Technology",
      image: "👨‍🔧",
    },
    {
      name: "Ishita Sharma",
      year: "1st Year",
      specialization: "Space Missions",
      image: "👩‍🚀",
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h1
          className={`text-5xl font-bold text-center mb-16 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Our Team
        </h1>

        {/* Executive Board */}
        <section className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Executive Board
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executiveBoard.map((member, index) => (
              <Card
                key={index}
                darkMode={darkMode}
                className="p-6 text-center hover:transform hover:scale-105 transition-transform"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3
                  className={`text-xl font-bold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {member.name}
                </h3>
                <div className="text-purple-500 font-semibold mb-2">
                  {member.position}
                </div>
                <div
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {member.year} • {member.specialization}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* General Members */}
        <section className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Active Members
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member, index) => (
              <Card
                key={index}
                darkMode={darkMode}
                className="p-6 text-center hover:transform hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-4">{member.image}</div>
                <h3
                  className={`text-lg font-bold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {member.name}
                </h3>
                <div
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {member.year} • {member.specialization}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Join Us Section */}
        <Card darkMode={darkMode} className="p-8 text-center">
          <h2
            className={`text-3xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Want to Join Our Team?
          </h2>
          <p
            className={`text-lg mb-8 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We welcome passionate individuals who share our love for astronomy
            and space exploration.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Apply for Membership
          </button>
        </Card>
      </div>
    </div>
  );
};
