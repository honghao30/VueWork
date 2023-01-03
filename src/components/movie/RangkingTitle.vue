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
  @media screen and (max-width: 768px) {
    padding-bottom: 0;
    font-size: 22px;
  }
}
.data {
  text-align: center;
  font-size: 25px;
  padding: 15px 0 30px;
  @media screen and (max-width: 768px) {
    padding: 5px 0 10px;
  }
}
</style>
