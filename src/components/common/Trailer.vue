<script>
import getTrailer from '@/api/getTrailer';
import { onMounted } from 'vue';

export default {
  //components: { },
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
  <div>
      <ul
      v-for="(traile, index) in trailers"
      :key="`${traile.id}-${index}`"
      >
          <li :movie="popularMovie">
            {{ movie['title'] }}
            <!-- https://m.blog.naver.com/jcosmoss/221715332150 -->
          </li>
      </ul>
  </div>
</template>

<style></style>
