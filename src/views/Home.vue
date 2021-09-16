<template>
  <carousel />
  <div class="container-fluid">
    <div class="text-header">
      <h1>Product Terlaris</h1>
      <div class="sub-title">product yang sering dibeli</div>
    </div>
    <product />
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import Product from "@/components/Product.vue";

export default {
  components: {
    Carousel,
    Product,
  },
};
</script>