<template>
  <swiper
    :slides-per-view="1"
    :space-between="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :modules="[Navigation]"
    navigation
  >
    <swiper-slide>
      <img
        src="https://cdn.pixabay.com/photo/2019/09/30/19/20/caravansary-4516601_960_720.jpg"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://cdn.pixabay.com/photo/2022/09/14/01/12/portrait-7453154_960_720.jpg"
      />
    </swiper-slide>
  </swiper>
</template>
<script setup>
import getPopularMovies from '@/api/getPopularMovies';
const { popularMovies, loading, loadPopularMovies } = getPopularMovies();
// // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// // Import Swiper styles
import 'swiper/css';

import { Navigation } from 'swiper';
</script>
