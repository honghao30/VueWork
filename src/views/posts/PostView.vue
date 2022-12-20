!
<template>
  <div class="container-fluid">
    <div class="page__title">
      <h2>게시글 상세화면</h2>
    </div>
    <div class="page__content">
      <div class="board__view">
        <Appcard>
          <div class="card-header">{{ post.title }}</div>
          <div class="card-body">
            {{ post.content }}
            <div class="createAt">{{ post.createAt }}</div>
          </div>
        </Appcard>
      </div>
      <div class="botttom__btn--wrap justify-space-between">
        <div class="prenext">
          <button type="button" class="btn btn-secondary">이전</button>
          <button type="button" class="btn btn-secondary">다음</button>
        </div>
        <div class="util text-right">
          <button type="button" class="btn btn-secondary" @click="goList">
            목록
          </button>
          <button type="button" class="btn btn-secondary" @click="remove">
            삭제
          </button>
          <button type="button" class="btn btn-dark" @click="goEdit">
            수정
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Appcard from '@/components/posts/Appcard.vue';
import { useRouter } from 'vue-router';
import { getPostById, deletePost } from '@/api/posts';
import { ref } from 'vue';

const props = defineProps({
  id: String,
});

const router = useRouter();
//const id = route.params.id;
const post = ref({});

const fetchPost = async () => {
  const { data } = await getPostById(props.id);
  //post.value = { ...data };
  setPost(data);
};
const setPost = ({ title, content, createAt }) => {
  post.value.title = title;
  post.value.content = content;
  post.value.createAt = createAt;
};
fetchPost();

const goList = () => {
  router.push({ name: 'List' });
};

const remove = async () => {
  try {
    if (confirm('삭제하시겠습니까?')) {
      await deletePost(props.id);
      router.push({ name: 'List' });
    }
  } catch (error) {
    console.log(error);
  }
};
const goEdit = () => router.push({ name: 'Edit', params: { id: props.id } });
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
