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
      :YoutubeVkeys="YoutubeVkeys"
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
  },
  setup() {
    const { trailers, loadTrailers } = getTrailer();
    const modal = ref(null);

    // M-sjJmIGClc
    const youtubeId = ref([]);
    let YoutubeVkey = youtubeId;
    const YoutubeVkeys = ref([]);
    const modalContent = ref([
      //`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${YoutubeVkey}  +'?autoplay=1"></iframe>`
      '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' +
        YoutubeVkey.value +
        '?autoplay=1"></iframe>',
    ]);
    const handleClick = async e => {
      const _id = e.target.parentElement.getAttribute('data-id');
      console.log(_id);
      axios
        .get(
          //`https://api.themoviedb.org/3/movie/upcoming?api_key=d2bb40d5b45665c9a72ed5938162a943&language=ko-KR&page=1`,
          `https://api.themoviedb.org/3/movie/${_id}/videos?api_key=d2bb40d5b45665c9a72ed5938162a943`,
        )
        .then(res => {
          console.log(res.data.results[0].key);
          youtubeId.value.push(res.data.results[0].key);
          YoutubeVkey.value = youtubeId.value[0];
          document.querySelector(
            '#youtubeVideo',
          ).innerHTML = `<iframe width="100%" height="300" src="https://www.youtube.com/embed/${YoutubeVkey.value}?autoplay=1"></iframe>`;
          YoutubeVkeys.value = youtubeId.value[0];
          console.log('key', YoutubeVkey, YoutubeVkeys.value);
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
      YoutubeVkeys,
      handleClick,
      youtubeId,
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
      position: relative;
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
  @media screen and (max-width: 768px) {
    top: 25%;
  }
}
.ir-text {
  font-size: 0;
}
</style>
