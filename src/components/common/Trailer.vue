<template>
  <div class="trailer__section">
    <div class="trailer__list--wrap">
      <ul class="trailer__list">
        <li
          v-for="(trailer, index) in trailers"
          :key="`${trailer.id}-${index}`"
        >
          <TrailerCard @click="handleClick" :trailer="trailer" />
        </li>
        <!-- https://stockant.tistory.com/560 -->
      </ul>
    </div>
    <TrailerModal
      ref="modal"
      :content="modalContent"
      title="영화 예고편"
    ></TrailerModal>
  </div>
</template>
<script>
import { ref } from 'vue';
import getTrailer from '@/api/getTrailer';
import { onMounted } from 'vue';
import TrailerCard from '../movie/TrailerCard.vue';
import TrailerModal from '../movie/TrailerModal.vue';

export default {
  components: { TrailerCard, TrailerModal },
  props: {
    title: {
      type: String,
    },
  },
  setup() {
    const { trailers, loadTrailers } = getTrailer();
    const modal = ref(null);
    const modalContent = ref([
      '확인/취소를 누르고',
      '배경에 결과가 출력되는 것을',
      '확인해보세요',
    ]);
    const handleClick = async () => {
      const ok = await modal.value.show();
    };
    onMounted(() => {
      loadTrailers();
      //loadGenres();
    });

    return {
      trailers,
      modal,
      modalContent,
      handleClick,
    };
  },
};
</script>
<style lang="scss">
.trailer__section {
  width: auto;
  margin: 0 24px;
  overflow: hidden;
}
.trailer__list--wrap {
  width: 100%;
  overflow-x: auto;
  margin-bottom: 100px;
  .trailer__list {
    display: flex;
    gap: 20px;
    li {
      list-style: none;
    }
  }
}
</style>
