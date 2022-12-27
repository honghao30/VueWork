<script>
import getPopularMovies from '@/api/getMovie';
import MovieCard from '../movie/MovieCard.vue';
import { onMounted } from 'vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  components: { MovieCard, Swiper, SwiperSlide },
  setup() {
    const { popularMovies, loadPopularMovies } = getPopularMovies();
    const onSwiper = swiper => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    onMounted(() => {
      loadPopularMovies();
      //loadGenres();
    });
    return {
      popularMovies,
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<template>
  <div>
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      navigation
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="(popularMovie, index) in popularMovies"
        :key="`${popularMovie.id}-${index}`"
      >
        <MovieCard :movie="popularMovie" />
      </swiper-slide>
    </swiper>
    <!-- <div
      class="mt-3"
      v-for="popularMovie in popularMovies"
      :key="popularMovie.id"
    >
      <MovieCard :movie="popularMovie" />
    </div> -->
  </div>
</template>

<style></style>
