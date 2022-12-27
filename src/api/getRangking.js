import axios from 'axios';
import { ref } from 'vue';

const getMovieRaingking = () => {
  const movieListRangk = ref([]);
  const Range = ref([]);

  const MoviesRangkings = async () => {
    axios
      .get(
        `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=ff4677c1cc97ed619e2bb12bb03f9be5&targetDt=20221223`,
      )
      .then(res => {
        console.log(res.data.boxOfficeResult);
        res.data.boxOfficeResult.dailyBoxOfficeList.forEach(result => {
          movieListRangk.value.push(result);
        });
        Range.value.push(res.data.boxOfficeResult.showRange);
        console.log(Range);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return { movieListRangk, Range, MoviesRangkings };
};

export default getMovieRaingking;
