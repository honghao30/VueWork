import axios from 'axios';
import { ref } from 'vue';

const getPopularMovies = () => {
  const popularMovies = ref([]);

  const loadPopularMovies = async () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=d2bb40d5b45665c9a72ed5938162a943&language=ko-KR&append_to_response=images,videos`,
      )
      .then(res => {
        res.data.results.forEach(result => {
          popularMovies.value.push(result);
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return { popularMovies, loadPopularMovies };
};

export default getPopularMovies;
