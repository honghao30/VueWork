<script>
import getMovieRaingking from '@/api/getRangking';
import getRangkingWeekly from '@/api/getRangkingWeekly';

import RangkingTable from '../movie/RangkingTable.vue';
import RangkingTitle from '../movie/RangkingTitle.vue';
import { onMounted } from 'vue';

export default {
  components: { RangkingTable, RangkingTitle },
  setup() {
    const { movieListRangk, MoviesRangkings, Range } = getMovieRaingking();
    const { movieListRangkWeek, MoviesRangkingsWeek } = getRangkingWeekly();

    onMounted(() => {
      MoviesRangkings();
      MoviesRangkingsWeek();
    });
    return {
      movieListRangk,
      movieListRangkWeek,
      Range,
    };
  },
};
</script>
<template>
  <div>
    <div class="movie__rakingbox">
      <RangkingTitle :RangeT="Range" />
      <table class="table table-striped table-hover">
        <thead>
          <tr class="table-dark">
            <th scope="col">순위</th>
            <th scope="col">영화명</th>
            <th scope="col">개봉일</th>
            <th scope="col">누적관객수</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(Rangking, index) in movieListRangk"
            :key="`${Rangking.id}-${index}`"
          >
            <RangkingTable :movieRk="Rangking"></RangkingTable>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="movie__rakingbox">
      <RangkingTitle :RangeT="Range" />
      <table class="table table-striped table-hover">
        <thead>
          <tr class="table-dark">
            <th scope="col">순위</th>
            <th scope="col">영화명</th>
            <th scope="col">개봉일</th>
            <th scope="col">누적관객수</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(Rangking, index) in movieListRangk"
            :key="`${Rangking.id}-${index}`"
          >
            <RangkingTable :movieRk="Rangking"></RangkingTable>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.movie__rakingbox {
  padding: 100px 50px;
  h1 {
    text-align: center;
    font-size: 50px;
  }
  .data {
    text-align: center;
    padding: 15px 0;
  }
}
</style>
