!
<template>
  <div class="container-fluid">
    <div class="page__title">
      <h2>게시글 수정</h2>
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
            목록
          </button>
          <button class="btn btn-dark">수정</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const form = ref({
  title: null,
  content: null,
});

const fetchPost = async () => {
  const { data } = await getPostById(id);
  //post.value = { ...data };
  setForm(data);
};

const setForm = ({ title, content }) => {
  form.value.title = title;
  form.value.content = content;
};
fetchPost();

const goList = () => {
  router.push({ name: 'List' });
};
const edit = async () => {
  try {
    await updatePost(id, { ...form.value });
    router.push({ name: 'View', params: { id } });
  } catch (error) {
    console.log(ereor);
  }
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
