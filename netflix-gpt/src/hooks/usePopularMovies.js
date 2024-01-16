import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  useEffect(() => {
    getPopularMovies();
  }, []);
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    //console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovies;
