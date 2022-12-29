import axios from 'axios';
import { ref } from 'vue';

const getMovieRaingking = () => {
  const movieListRangk = ref([]);
  const Range = ref([]);
  const RangkTitle = ref([]);

  const MoviesRangkings = async () => {
    let year = new Date().getFullYear();
    let month =
      new Date().getMonth() + 1 < 10
        ? '0' + (new Date().getMonth() + 1)
        : new Date().getMonth() + 1;
    let date =
      new Date().getDate() < 10
        ? '0' + new Date().getDate()
        : new Date().getDate();
    let nowtime = String(year) + String(month) + String(date - 1);
    console.log(nowtime);
    axios
      .get(
        `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=ff4677c1cc97ed619e2bb12bb03f9be5&targetDt=${nowtime}`,
      )
      .then(res => {
        console.log('영진위', res.data.boxOfficeResult);
        res.data.boxOfficeResult.dailyBoxOfficeList.forEach(result => {
          movieListRangk.value.push(result);
        });
        Range.value.push(res.data.boxOfficeResult.showRange);
        RangkTitle.value.push(res.data.boxOfficeResult.boxofficeType);
        console.log(res.data.boxOfficeResult.boxofficeType);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return { movieListRangk, RangkTitle, Range, MoviesRangkings };
};

export default getMovieRaingking;
