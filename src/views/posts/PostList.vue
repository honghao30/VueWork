!
<template>
  <div class="container-fluid">
    <div class="page__title">
      <h2>게시글 목록</h2>
    </div>
    <div class="row mt-50">
      <form @submit.prevent>
        <div class="board-form">
          <div class="col form-search">
            <input
              type="text"
              v-model="params.title_like"
              class="form-control"
            />
            <button class="btn btn-info">검색</button>
          </div>
          <div class="col-3">
            <select v-model="params._limit" class="form-select">
              <option value="3">3개씩 보기</option>
              <option value="6">6개씩 보기</option>
              <option value="9">9개씩 보기</option>
            </select>
          </div>
        </div>
      </form>
    </div>
    <div class="page__content">
      <div class="board__wrap">
        <div v-for="post in posts" :key="post.id" class="PostItems">
          <PostItem
            :title="post.title"
            :content="post.content"
            :createAt="post.createAt"
            @click="goPage(post.id)"
          ></PostItem>
        </div>
      </div>
      <div class="botttom__btn--wrap text-right">
        <button type="button" class="btn btn-dark" @click="goCreatPost">
          글쓰기
        </button>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: !(params._page > 1) }">
          <a class="page-link" href="#" @click.prevent="--params._page"
            >이전글</a
          >
        </li>
        <li
          v-for="page in pageCount"
          :key="page"
          class="page-item"
          :class="{ active: params._page === page }"
        >
          <a class="page-link" href="#" @click.prevent="params._page = page">{{
            page
          }}</a>
        </li>
        <li
          class="page-item"
          :class="{ disabled: !(params._page < pageCount) }"
        >
          <a class="page-link" href="#" @click.prevent="++params._page"
            >다음글</a
          >
        </li>
      </ul>
    </nav>
    <hr />
    <Appcard>
      <PostView :id="1"></PostView>
    </Appcard>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { getPosts } from '@/api/posts';
import PostView from '@/views/posts/PostView.vue';
import Appcard from '@/components/posts/Appcard.vue';

import { computed, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const params = ref({
  _sort: 'createAt',
  _order: 'desc',
  _page: 1,
  title_like: '',
  _limit: 3,
});

const totalCount = ref(0);
const pageCount = computed(() =>
  Math.ceil(totalCount.value / params.value._limit),
);
const posts = ref([]);

const fechPosts = async () => {
  const { data, headers } = await getPosts(params.value);
  posts.value = data;
  totalCount.value = headers['x-total-count'];
  console.log(data);
};
watchEffect(fechPosts);
//fechPosts();

const goCreatPost = () => {
  router.push({ name: 'Creator' });
};
const goPage = id => {
  //router.push(`/posts/${id}`);
  router.push({
    name: 'View',
    params: {
      id,
    },
  });
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
