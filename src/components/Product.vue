<template>
  <div class="product-terlaris">
    <div class="row">
      <template v-for="data of products" :key="data.id">
        <div class="col-md-3">
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
      </template>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("product/getProductsAll");
    });
    const products = computed(() => {
      return store.getters["product/getAllProducts"];
    });
    return {
      products,
    };
  },
};
</script>