<template>
  <h1>{{ RangTit }}</h1>
  <div class="data">{{ RangeT }}</div>
</template>
<script>
export default {
  props: ['RangeT', 'RangTit'],
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
