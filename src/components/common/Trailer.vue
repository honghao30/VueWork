<script>
import getTrailer from '@/api/getTrailer';
import { onMounted } from 'vue';
import TrailerCard from '../movie/TrailerCard.vue';

export default {
  components: { TrailerCard },
  setup() {
    const { trailers, loadTrailers } = getTrailer();

    onMounted(() => {
      loadTrailers();
      //loadGenres();
    });
    return {
      trailers,
      modules: [],
    };
  },
};
</script>

<template>
  <div class="trailer__section">
    <div class="trailer__list--wrap">
      <ul class="trailer__list">
        <li
          v-for="(trailer, index) in trailers"
          :key="`${trailer.id}-${index}`"
        >
          <TrailerCard :trailer="trailer" />
        </li>
        <!-- https://stockant.tistory.com/560 -->
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.trailer__section {
  width: auto;
  margin: 0 24px;
  overflow: hidden;
}
.trailer__list--wrap {
  width: 100%;
  overflow-x: auto;
  margin-bottom: 100px;
  .trailer__list {
    display: flex;
    gap: 20px;
    li {
      list-style: none;
    }
  }
}
</style>
