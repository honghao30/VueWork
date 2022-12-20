!
<template>
  <div class="container-fluid">
    <div class="page__title">
      <h2>게시글 작성</h2>
    </div>
    <div class="page__content">
      <form v-on:submit.prevent="edit">
        <div class="board__view">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >제목</label
            >
            <input
              v-model="form.title"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="제목을 입력하세요"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >내용</label
            >
            <textarea
              v-model="form.content"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div class="botttom__btn--wrap text-right">
          <button type="button" class="btn btn-secondary" @click="goList">
            취소
          </button>
          <button class="btn btn-primary">저장</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
const router = useRouter();

const form = ref({
  title: null,
  content: null,
});

const send = () => {
  try {
    createPost({
      ...form.value,
      createAt: Date.now(),
    });
    router.push({ name: 'List' });
  } catch (error) {
    console.log(error);
  }
  console.log('폼');
};

const goList = () => {
  router.push({ name: 'List' });
};
</script>

<style lang="scss" scoped>
.board__wrap {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
}
.createAt {
  font-size: 12px;
}
</style>
