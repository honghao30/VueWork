!
<template>
  <div class="container-fluid">
    <div class="page__title">
      <h2>게시글 상세화면</h2>
    </div>
    <div class="page__content">
      <div class="board__view">
        <div class="card">
          <div class="card-header"><a href="#">게시판 제목입니다.</a></div>
          <div class="card-body">
            With supporting text below as a natural lead-in to additional
            content.
            <div class="createAt">2022-12-01</div>
          </div>
        </div>
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
          <button type="button" class="btn btn-secondary">삭제</button>
          <button type="button" class="btn btn-dark">수정</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
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
