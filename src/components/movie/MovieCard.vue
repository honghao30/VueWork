<template>
  <div class="movie-card">
    <div class="movieInfo" data-swiper-parallax="-200">
      <h2>{{ movie['title'] }}</h2>
      <div class="description">{{ movie['overview'] }}</div>
    </div>
    <image-or-placeholder :result="movie" />
  </div>
</template>
<script>
import ImageOrPlaceholder from './ImageOrPlaceholder.vue';
export default {
  components: { ImageOrPlaceholder },
  props: ['movie'],
};
</script>
<style lang="scss" scoped>
.movie-card {
  position: relative;
  width: 100%;
  img {
    width: 100vw;
    max-width: 100%;
    height: calc(100vh - 56px);
  }
  .movieInfo {
    position: absolute;
    max-width: 50%;
    left: 50px;
    bottom: 10%;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 50px;
    h2 {
      font-size: 36px;
      font-weight: bold;
    }
    .description {
      font-size: 18px;
      line-height: 150%;
      margin-top: 20px;
    }
  }
}
</style>
