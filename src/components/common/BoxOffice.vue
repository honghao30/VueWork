<script>
import getMovieRaingking from '@/api/getRangking';

import RangkingTable from '../movie/RangkingTable.vue';
import RangkingTitle from '../movie/RangkingTitle.vue';
import { onMounted } from 'vue';

export default {
  components: { RangkingTable, RangkingTitle },
  setup() {
    const { movieListRangk, MoviesRangkings, Range, RangkTitle } =
      getMovieRaingking();

    onMounted(() => {
      MoviesRangkings();
    });
    return {
      movieListRangk,
      Range,
      RangkTitle,
    };
  },
};
</script>
<template>
  <div class="movie__rakingbox">
    <RangkingTitle :RangTit="RangkTitle" :RangeT="Range" />
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
</template>
<style lang="scss" scoped>
.movie__rakingbox {
  padding: 100px 50px;
  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }
  h1 {
    text-align: center;
    font-size: 50px;
    @media screen and (max-width: 768px) {
      font-size: 25px;
      padding-bottom: 5px !important;
    }
  }
  .data {
    text-align: center;
    padding: 15px 0;
    @media screen and (max-width: 768px) {
      font-size: 15px;
      padding: 5px 0;
    }
  }
}

.table > :not(caption) > * > * {
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
}
</style>
