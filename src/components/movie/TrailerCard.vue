<template>
  <li>
    <div class="poster">
      <ImagePoster
      :poster="trailer" />        
    </div>
    <h2>{{ trailer['title'] }}</h2>
    <div class="detailinfo">
      {{ trailer['overview'] }}
    </div>
    <div class="release"> {{ trailer['release_date'] }}</div>
    <div class="vote"> {{ trailer['vote_average'] }}</div>
  </li>
</template>
<script>
import ImagePoster from './ImagePoster.vue';
export default {
  components: { ImagePoster },
  props: ['trailer'],
};
</script>
<style lang="scss" scoped>

</style>
