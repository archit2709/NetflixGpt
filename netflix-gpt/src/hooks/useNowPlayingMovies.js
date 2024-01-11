import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addnowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    //console.log(json.results);
    dispatch(addnowPlayingMovies(json.results));
  };
};

export default useNowPlayingMovies;
