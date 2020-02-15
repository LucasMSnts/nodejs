import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Header/Hero";
import MovieItem from "../Components/MovieItem";
import { movies } from "../mock";
import "./main.css";

const Main = () => (
  <>
    <Header />
    <Hero />
    <div className="gallery-container">
      {
        movies.map(movie => 
          <MovieItem movie={movie} key={movie.id}/>)
      }
    </div>
  </>
);

export default Main;
