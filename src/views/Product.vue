<template>
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item parent">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Products</li>
      </ol>
    </nav>
    <div class="text-header mb-4 mt-5">
      <h1>Semua Products</h1>
    </div>
    <products />
  </div>
</template>

<script>
import Products from "@/components/Product.vue";
export default {
  components: {
    Products,
  },
};
</script>