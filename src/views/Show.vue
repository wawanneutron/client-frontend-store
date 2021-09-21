<template>
  <div class="container-fluid mt-5 mb-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item parent">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Detail product
        </li>
      </ol>
    </nav>
    <div class="row show-product show-product mt-5">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <!-- card header -->
            <transition
              v-if="gallery[photoActive]"
              name="slide-fade"
              mode="out-in"
            >
              <img
                :src="gallery[photoActive].image"
                class="img-store img-fluid w-100"
              />
            </transition>
            <!-- thumbnail -->
            <div class="row justify-content-center mt-3">
              <template v-for="(item, index) of gallery" :key="item.id">
                <div class="col-md-3 col-4 col-thumbnail">
                  <main @click="changeActive(index)">
                    <img
                      class="w-100 img-thumbnail float-left"
                      :src="item.image"
                      :class="{ active: index == this.photoActive }"
                    />
                  </main>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <label class="font-weight-bold" style="font-size: 20px">
              {{ product.title }}
            </label>
            <hr />
            <div
              class="price-product"
              id="price-product"
              style="font-size: 1.35rem"
            >
              <span class="font-weight-bold me-4"
                >Rp. {{ moneyFormat(calculateDiscount(product)) }}</span
              >
              <s class="font-weight-bold"
                >Rp. {{ moneyFormat(product.price) }}</s
              >
            </div>
            <table class="table table-show table-borderless mt-3">
              <tbody>
                <tr>
                  <td class="font-weight-bold">DISKON</td>
                  <td>:</td>
                  <td>
                    <button
                      class="btn btn-sm"
                      style="color: #ff2f00; border-color: #ff2f00"
                    >
                      DISKON {{ product.discount }} %
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="font-weight-bold">BERAT</td>
                  <td>:</td>
                  <td>
                    <span
                      class="badge badge-pill badge-success"
                      style="
                        font-size: 14px;
                        border-radius: 0.3rem;
                        padding: 0.25em 0.5em 0.2em;
                      "
                    >
                      {{ product.weight }} gram</span
                    >
                  </td>
                </tr>
                <tr>
                  <td class="font-weight-bold">STOCK</td>
                  <td>:</td>
                  <td>
                    <span
                      class="badge badge-pill badge-warning"
                      style="
                        font-size: 14px;
                        border-radius: 0.3rem;
                        padding: 0.25em 0.5em 0.2em;
                      "
                    >
                      {{ product.stock }} stock</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <button
                @click="
                  addToCart(
                    calculateDiscount(product),
                    product.id,
                    product.weight
                  )
                "
                class="btn btn-orange btn-lg btn-block"
              >
                <i class="fa fa-shopping-cart"></i> TAMBAH KE KERANJANG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row show-product mt-5">
      <div class="col-md-12">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <h3>Detail product</h3>
            <p v-html="product.content"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      store.dispatch("product/detailProduct", route.params.slug);
    });

    const product = computed(() => {
      return store.getters["product/getDetailProduct"];
    });
    const gallery = computed(() => {
      return store.getters["product/getGalleries"];
    });

    const addToCart = (price, id, weight) => {
      const token = store.state.auth.token;
      if (!token) {
        return router.push({ name: "login" });
      }
      store.dispatch("cart/addToCart", {
        price: price,
        product_id: id,
        weight: weight,
        quantity: 1,
      });
    };

    return {
      product,
      gallery,
      addToCart,
    };
  },
  data: () => ({
    photoActive: 0,
  }),
  methods: {
    changeActive(id) {
      this.photoActive = id;
    },
  },
};
</script>