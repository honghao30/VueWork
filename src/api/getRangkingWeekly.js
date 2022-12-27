import axios from 'axios';
import { ref } from 'vue';

const getMovieRaingkingWeek = () => {
  const movieListRangkWeek = ref([]);
  const Range = ref([]);

  const MoviesRangkingsWeek = async () => {
    axios
      .get(
        `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=ff4677c1cc97ed619e2bb12bb03f9be5&targetDt=20221218`,
      )
      .then(res => {
        console.log('주간', res.data.boxOfficeResult.weeklyBoxOfficeList);
        // res.data.boxOfficeResult.dailyBoxOfficeList.forEach(result => {
        //   movieListRangkWeek.value.push(result);
        // });
        // Range.value.push(res.data.boxOfficeResult.showRange);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return { movieListRangkWeek, Range, MoviesRangkingsWeek };
};

export default getMovieRaingkingWeek;
