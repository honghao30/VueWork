<template>
  <div>
    <button type="button" class="btn-play">
      <i class="bi bi-play-circle"></i>예고편 영상 보기
    </button>
    <div class="poster" v-bind:data-id="trailer.id">
      <ImagePoster :poster="trailer" />
    </div>
    <h2>{{ trailer['title'] }}</h2>
    <div class="detailinfo">
      {{ trailer['overview'] }}
    </div>
    <div class="release">개봉일 : {{ trailer['release_date'] }}</div>
    <div class="vote">평점 : {{ trailer['vote_average'] }}</div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import ImagePoster from './ImagePoster.vue';
defineProps({
  trailer: String,
});
</script>
<style lang="scss" scoped>
.modal-backdrop.show {
  opacity: 0.5 !important;
}
.trailer__list--wrap .trailer__list li .poster {
  width: 250px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.trailer__list--wrap .trailer__list li .poster img {
  width: auto;
  height: 100%;
}
.trailer__list--wrap .trailer__list li h2 {
  margin-top: 18px;
  font-size: 20px;
}
.detailinfo {
  margin-top: 10px;
  font-size: 16px;
  overflow: hidden;
  line-height: 1.5rem;
  height: 4.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.release,
.vote {
  font-size: 14px;
  margin: 1px 0;
}
</style>
