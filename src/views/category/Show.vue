<template>
  <div class="categories container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item parent">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumb-item parent">
          <router-link :to="{ name: 'categories' }">Kategori</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Product</li>
      </ol>
    </nav>
    <div class="text-header mb-4 mt-5">
      <h1>Produk berdasarkan kategori</h1>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-2">
        <div class="card border-0 shadow card-category">
          <div class="card-body">
            <img :src="category.image" alt="card image" width="100" />
            <hr />
            <div class="title">{{ category.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-terlaris">
      <div class="row">
        <template v-for="data of products" :key="data.id">
          <div class="col-md-3">
            <router-link :to="{ name: 'detail' }">
              <div class="card card-product">
                <div class="product-thumbnail">
                  <img :src="data.gallery[0].image" alt="card image" />
                </div>
                <div class="card-body">
                  <div class="title">{{ data.title }}</div>
                  <div class="discount">
                    <s>Rp. {{ moneyFormat(data.price) }} </s> /
                    <span class="badge bg-info"
                      >Discount {{ data.discount }} %</span
                    >
                  </div>
                  <div class="price">
                    Rp. {{ moneyFormat(calculateDiscount(data)) }}
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    onMounted(() => {
      store.dispatch("category/productsCategory", route.params.slug);
    });
    const products = computed(() => {
      return store.getters["category/getProductsCategory"];
    });

    const category = computed(() => {
      return store.getters["category/getCategoryShow"];
    });

    return {
      products,
      category,
    };
  },
};
</script>