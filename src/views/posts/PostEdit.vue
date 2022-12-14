!
<template>
  <div class="container-fluid">
    <div class="page__title">
      <h2>게시글 수정</h2>
    </div>
    <div class="page__content">
      <div class="board__view">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">제목</label>
          <input
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
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div class="botttom__btn--wrap text-right">
        <button type="button" class="btn btn-secondary">목록</button>
        <button type="button" class="btn btn-dark">수정</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
