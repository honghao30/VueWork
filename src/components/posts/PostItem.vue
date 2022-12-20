!
<template>
  <div>
    <div class="card">
      <div class="card-header">{{ title }}</div>
      <div class="card-body">
        {{ content }}
        <div class="createAt">{{ createAt }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  createAt: {
    type: [String, Number, Date],
  },
});
</script>

<style lang="scss" scoped></style>
