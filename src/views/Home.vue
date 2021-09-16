<template>
  <carousel />
  <div class="container-fluid">
    <div class="product-terlaris">
      <div class="text-header">
        <h1>Product Terlaris</h1>
        <div class="sub-title">product yang sering dibeli</div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
export default {
  components: {
    Carousel,
  },
};
</script>