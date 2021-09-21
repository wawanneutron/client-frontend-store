<template>
  <div class="categories container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item parent">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Kategori</li>
      </ol>
    </nav>
    <div class="text-header mb-4 mt-5">
      <h1>Semua Kategori</h1>
    </div>
    <div class="row">
      <template v-for="category of categories" :key="category.id">
        <div class="col-lg-2 col-md-3">
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
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("category/allCategories");
    });
    const categories = computed(() => {
      return store.getters["category/getAllCategories"];
    });

    return {
      categories,
    };
  },
};
</script>