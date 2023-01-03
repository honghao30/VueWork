<template>
  <div class="trailer__section">
    <div class="trailer__list--wrap">
      <ul class="trailer__list">
        <li
          v-for="(trailer, index) in trailers"
          :key="`${trailer.id}-${index}`"
        >
          <PlayBtn @click="handleClick" v-bind:data-id="trailer.id" />
          <TrailerCard :trailer="trailer" />
        </li>
        <!-- https://stockant.tistory.com/560 -->
      </ul>
    </div>
    <TrailerModal
      ref="modal"
      :content="modalContent"
      :kyeVal="youtubeKey"
      title="영화 예고편"
    ></TrailerModal>
  </div>
</template>
<script>
import { ref } from 'vue';
import axios from 'axios';
import getTrailer from '@/api/getTrailer';
import { onMounted } from 'vue';
import TrailerCard from '../movie/TrailerCard.vue';
import TrailerModal from '../movie/TrailerModal.vue';
import PlayBtn from '../movie/PlayBtn.vue';

export default {
  components: { TrailerCard, TrailerModal, PlayBtn },
  props: {
    title: {
      type: String,
    },
    youtubeKey: {
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
    const youtubeKey = ref([]);
    const handleClick = async e => {
      const _id = e.target.parentElement.getAttribute('data-id');
      console.log(_id);
      axios
        .get(
          //`https://api.themoviedb.org/3/movie/upcoming?api_key=d2bb40d5b45665c9a72ed5938162a943&language=ko-KR&page=1`,
          `https://api.themoviedb.org/3/movie/${_id}/videos?api_key=d2bb40d5b45665c9a72ed5938162a943`,
        )
        .then(res => {
          console.log('key', res.data.results[0].key);
          youtubeKey.value.push(res.data.results[0].key);
          console.log(youtubeKey.value);
        })
        .catch(err => {
          console.log(err.message);
        });
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
      youtubeKey,
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
.trailer__list li {
  position: relative;
}
.btn-play {
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 60px;
  background: none;
  border: 0;
  z-index: 10;
}
.ir-text {
  font-size: 0;
}
</style>
