<template>
  <img
    :src="`https://image.tmdb.org/t/p/original/${result.backdrop_path}`"
    alt="poster"
  />
</template>

<script>
export default {
  props: ['result'],
};
</script>
