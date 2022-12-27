!
<template>
  <div class="container-fluid">
    <div class="page__title">
      <h2>게시글 작성</h2>
    </div>
    <div class="page__content">
      <PostForm
        v-model:title="form.title"
        v-model:content="form.content"
        @submit.prevent="send"
      >
        <template #actions>
          <div class="botttom__btn--wrap text-right">
            <button type="button" class="btn btn-secondary" @click="goList">
              목록
            </button>
            <button class="btn btn-dark">저장</button>
          </div>
        </template>
      </PostForm>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
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
