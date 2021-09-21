<template>
  <header class="section-header fixed-top">
    <section class="header-main border-bottom">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-3 col-7">
            <router-link to="/" class="text-decoration-none" data-abc="true">
              <span class="logo"
                ><i class="fas fa-shopping-bag me-2"></i>Jhopri
              </span></router-link
            >
          </div>
          <div class="col-md-5 d-none d-md-block">
            <form class="search-wrap">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="mau belanja apa hari ini ?"
                  aria-label="mau belanja apa hari ini ?"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn search-button"
                  type="button"
                  id="button-addon2"
                >
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </form>
          </div>
          <div class="col-md-4 col-5">
            <div class="d-flex justify-content-end">
              <div class="cart-header">
                <router-link
                  :to="{ name: 'cart' }"
                  class="btn search-button btn-md"
                  ><i class="fa fa-shopping-cart"></i> {{ cartCount }} | Rp.
                  {{ moneyFormat(cartTotal) }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- sub navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <div class="row">
          <div class="col-2">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" style="font-size: 20px"></span>
            </button>
          </div>
          <div class="col-10">
            <form class="search-wrap">
              <div class="input-group d-md-none">
                <input
                  type="text"
                  class="form-control search-form"
                  name="q"
                  placeholder="mau beli apa hari ini ?"
                />
                <div class="input-group-append">
                  <button class="btn search-button-mobile" type="submit">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                :to="{ name: 'categories' }"
                class="nav-link"
                aria-current="page"
              >
                <i class="fa fa-shopping-bag"></i>
                semua kategori</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'products' }"
                class="nav-link"
                aria-current="page"
              >
                <i class="fa fa-shopping-bag"></i>
                Semua Produk</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-info-circle"></i>Tentang</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fa fa-comments"></i>Kontak</a
              >
            </li>
          </ul>
          <div class="account">
            <router-link :to="{ name: 'login' }" class="btn"
              ><i class="fa fa-user-circle"></i> Account</router-link
            >
            <router-link :to="{ name: 'dashboard' }" class="btn"
              ><i class="fa fa-tachometer-alt"></i>Dashboard</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      // check state token
      const token = store.state.auth.token;
      if (!token) {
        return;
      }
      // action
      store.dispatch("cart/cartCount");
      store.dispatch("cart/cartTotal");
    });

    const cartCount = computed(() => {
      return store.getters["cart/getCartCount"];
    });
    const cartTotal = computed(() => {
      return store.getters["cart/getTotalCart"];
    });

    console.log([cartCount, cartTotal]);

    return {
      cartCount,
      cartTotal,
    };
  },
};
</script>

