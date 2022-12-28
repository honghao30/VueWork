<template>
  <img
    :src="`https://image.tmdb.org/t/p/w300/${poster.poster_path}`"
    alt="poster"
  />
</template>

<script>
export default {
  props: ['poster'],
};
</script>

