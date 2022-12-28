import axios from 'axios';
import { ref } from 'vue';

const getMovieVideos= () => {
  const trailers = ref([]);

  const loadTrailers = async () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=d2bb40d5b45665c9a72ed5938162a943&language=ko-KR&page=1`,
      )      
      .then(res => {
        console.log(res)
        res.data.results.forEach(result => {
          trailers.value.push(result);
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return { trailers, loadTrailers };
};

export default getMovieVideos;
