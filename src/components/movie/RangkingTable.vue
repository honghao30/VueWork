<template>
  <th scope="row" class="text-c">{{ movieRk['rank'] }}</th>
  <td>{{ movieRk['movieNm'] }}</td>
  <td class="text-c">{{ movieRk['openDt'] }}</td>
  <td class="text-c">{{ movieRk['audiAcc'] }}</td>
</template>
<script>
export default {
  props: ['movieRk'],
};
</script>
<style lang="scss" scoped></style>
