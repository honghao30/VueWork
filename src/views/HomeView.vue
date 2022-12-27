!
<template>
  <div class="container-full">
    <MainVisual></MainVisual>
    <BoxOffice></BoxOffice>
  </div>
</template>

<script setup>
import MainVisual from '../components/common/MainVisual.vue';
import BoxOffice from '../components/common/BoxOffice.vue';
</script>

<style lang="scss" scoped>
.container-full {
  width: 100%;
}
</style>
