<template>
  <h1>박스 오피스</h1>
  <div class="data">{{ RangeT }}</div>
</template>
<script>
export default {
  props: ['RangeT'],
  setup() {},
};
</script>
<style lang="scss" scoped>
h1 {
  padding-bottom: 20px;
  text-align: center;
}
.data {
  text-align: center;
  font-size: 25px;
  padding: 15px 0 30px;
}
</style>
