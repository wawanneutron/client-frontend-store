<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        class="carousel-item"
        v-for="(data, id) of carousel"
        :key="data.id"
        :class="{ active: id == 0 }"
      >
        <img :src="data.image" class="d-block w-100" alt="carousel" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true">
        <span style="margin: 8px auto" class="fa fa-angle-left"></span>
      </span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true">
        <span style="margin: 8px auto" class="fa fa-angle-right"></span>
      </span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("carousel/carousel");
    });
    const carousel = computed(() => {
      return store.getters["carousel/getCarousel"];
    });

    return {
      carousel,
    };
  },
};
</script>