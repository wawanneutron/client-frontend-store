<template>
  <carousel />
  <div class="container-fluid">
    <div class="text-header">
      <h1>Category</h1>
    </div>
    <div class="row">
      <template v-for="category of categories" :key="category.id">
        <div class="col-lg-2 col-md-3 col-6">
          <router-link
            :to="{ name: 'category', params: { slug: category.slug } }"
          >
            <div class="card card-category">
              <div class="card-body">
                <img :src="category.image" alt="card image" width="100" />
                <hr />
                <div class="title">{{ category.name }}</div>
              </div>
            </div>
          </router-link>
        </div>
      </template>
    </div>
    <div class="text-header">
      <h1>Product Terlaris</h1>
      <div class="sub-title">product yang sering dibeli</div>
    </div>
    <div class="product-terlaris">
      <div class="row">
        <div class="col-md-3" v-for="data of terlaris" :key="data.id">
          <router-link :to="{ name: 'detail', params: { slug: data.slug } }">
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
      </div>
    </div>
    <div class="text-header">
      <h1>Product Terbaru</h1>
      <div class="sub-title">cari barang kesukaan mu</div>
    </div>
    <div class="product-terlaris">
      <div class="row">
        <div class="col-md-3" v-for="data of products" :key="data.id">
          <router-link :to="{ name: 'detail', params: { slug: data.slug } }">
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
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import { useStore } from "vuex";
import { computed, onMounted } from "@vue/runtime-core";

export default {
  components: {
    Carousel,
  },
  setup() {
    const store = useStore();
    // jalankan action vuex ketika borwser di load
    onMounted(() => {
      store.dispatch("product/terlaris");
      store.dispatch("product/homeProducts");
      store.dispatch("category/headerCategory");
    });

    const terlaris = computed(() => {
      return store.getters["product/getTerlaris"];
    });
    const products = computed(() => {
      return store.getters["product/getHomeProducts"];
    });

    const categories = computed(() => {
      return store.getters["category/getHeaderCategory"];
    });

    return {
      terlaris,
      products,
      categories,
    };
  },
};
</script>