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
    @media screen and (max-width: 768px) {
      height: auto;
    }
  }
  .movieInfo {
    position: absolute;
    max-width: 50%;
    left: 50px;
    bottom: 10%;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 50px;
    @media screen and (max-width: 768px) {
      max-width: 90%;
      left: 2vw;
      bottom: 2vw;
    }
    h2 {
      font-size: 36px;
      font-weight: bold;
      @media screen and (max-width: 768px) {
        font-size: 20px;
      }
    }
    .description {
      font-size: 18px;
      line-height: 150%;
      margin-top: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* 라인수 */
      -webkit-box-orient: vertical;
      word-wrap: break-word;
      line-height: 1.2em;
      height: 3.6em;
      @media screen and (max-width: 768px) {
        font-size: 16px;
        -webkit-line-clamp: 2; /* 라인수 */
        line-height: 1.2em;
        height: 2.4em;
      }
    }
  }
}
</style>
