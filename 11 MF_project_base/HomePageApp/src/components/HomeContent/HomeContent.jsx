import React, { Suspense, useEffect, useState } from "react";
import QuickBooking from "../QuickBooking/QuickBooking.jsx";
import "./HomeContent.scss";

const dummyItem = [{ name: "Dummy Movie" }]
const MovieCard = React.lazy(() => import('components/MovieCard'));

const HomeContent = (props) => {
  const [movies, setMovies] = useState(dummyItem);

  useEffect(async () => {
    // Add the logic to load the movies from server and set to the state
    const res = await fetch('http://localhost:5555/movies');
    const data = await res.json();
    setMovies(data);
    console.log('Movies :', data);
  }, []);

  const movieClicked = (item) => {
    if (typeof props.movieClicked === "function") {
      props.movieClicked(item);
    }
  };

  const renderMovieList = () => {
    let items = movies.map((item) => {
      return (
        <div onClick={() => movieClicked(item)} key={item.name}>
          <MovieCard title={item.name} imageUrl={item.imageUrl}></MovieCard>
        </div>
      );
    });

    return items;
  };

  return (
    <div className="home-content-container">
      <QuickBooking></QuickBooking>
      <div className="movies-container">
        <Suspense fallback={null}>
          {renderMovieList()}
        </Suspense>
      </div>
    </div>
  );
};

export default HomeContent;
