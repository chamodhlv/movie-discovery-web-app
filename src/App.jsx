import Search from "./components/Search.jsx";
import Spinner from "./components/Spinner.jsx";
import MovieCard from "./components/MovieCard.jsx";
import { useState, useEffect } from "react";
import { useDebounce } from "react-use";

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useDebounce(
    () => {
      if (searchTerm !== debouncedSearchTerm) {
        setDebouncedSearchTerm(searchTerm);
        setCurrentPage(1);
        setIsLoading(true);
      }
    },
    500,
    [searchTerm],
  );

  const fetchMovies = async (query = "", page = 1) => {
    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&page=${page}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&page=${page}`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      if (data.response === "false") {
        setErrorMessage(data.error || "Failed to fetch movies.");
        setMovieList([]);
      }

      setMovieList(data.results || []);
      setTotalPages(Math.min(data.total_pages || 1, 500));
      setErrorMessage("");
    } catch (error) {
      console.error("Error fetching movies:", error);
      setErrorMessage("Failed to fetch movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const requestTimer = setTimeout(() => {
      fetchMovies(debouncedSearchTerm, currentPage);
    }, 0);

    return () => clearTimeout(requestTimer);
  }, [debouncedSearchTerm, currentPage]);

  const changePage = (newPage) => {
    setIsLoading(true);
    setCurrentPage(newPage);
    document.querySelector(".all-movies")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main>
      <div className="pattern"></div>

      <div className="wrapper">
        <header>
          <img className="hero-image" src="/hero5.png" alt="Hero Image" />
          <h1>
            Discover Amazing <span className="text-gradient">Movies </span>
            Without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="all-movies">
          <h2 className="mt-9">All Movies</h2>
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <>
              <ul>
                {movieList.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </ul>

              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => changePage(currentPage - 1)}
                  >
                    Previous
                  </button>

                  <p>
                    Page {currentPage} of {totalPages}
                  </p>

                  <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => changePage(currentPage + 1)}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
