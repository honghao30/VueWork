!
<template>
  <div class="container-fluid">
    <div class="page__title">
      <h2>게시글 목록</h2>
    </div>
    <div class="page__content">
      <div class="board__wrap">
        <div class="card">
          <div class="card-header"><a href="#">게시판 제목입니다.</a></div>
          <div class="card-body">
            With supporting text below as a natural lead-in to additional
            content.
            <div class="createAt">2022-12-01</div>
          </div>
        </div>
      </div>
      <div class="botttom__btn--wrap text-right">
        <button type="button" class="btn btn-dark" @click="goCreatPost">
          글쓰기
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goCreatPost = () => {
  router.push({ name: 'Creator' });
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
