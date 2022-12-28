!
<template>
  <div class="container-full">
    <MainVisual></MainVisual>
    <BoxOffice></BoxOffice>
    <Trailer></Trailer>
  </div>
</template>

<script setup>
import MainVisual from '../components/common/MainVisual.vue';
import BoxOffice from '../components/common/BoxOffice.vue';
import Trailer from '../components/common/Trailer.vue';
</script>

<style lang="scss" scoped>
.container-full {
  width: 100%;
}
</style>
