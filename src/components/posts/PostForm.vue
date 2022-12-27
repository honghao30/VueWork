<template>
  <form>
    <div class="board__view">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">제목</label>
        <input
          @input="$emit('update:title', $event.target.value)"
          :value="title"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="제목을 입력하세요"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">내용</label>
        <textarea
          @input="$emit('update:content', $event.target.value)"
          :value="content"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
    <slot name="actions"></slot>
    <!-- <div class="botttom__btn--wrap text-right">
      <button type="button" class="btn btn-secondary" @click="goList">
        취소
      </button>
      <button class="btn btn-primary">저장</button>
    </div> -->
  </form>
</template>

<script setup>
defineProps({
  title: String,
  content: String,
});
defineEmits(['update:title', 'update:content']);
</script>

<style lang="scss" scoped></style>
