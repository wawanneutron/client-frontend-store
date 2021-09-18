<template>
  <div class="container-fluid dashboard">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item parent">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-md-3">
        <customer-menu />
      </div>
      <div class="col-md-9">
        <div class="card card-dashboard border-top-orange border-0 shadow">
          <div class="card-body">
            <div class="title">
              <i class="fa fa-tachometer-alt"></i>
              Dashboard
            </div>
            <hr />
            <div class="mt-3 alert alert-info">
              Selamat datang <b>{{ user.name }}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerMenu from "@/components/dashboard/Menu.vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
// import { onMounted } from "@vue/runtime-core";

export default {
  components: {
    CustomerMenu,
  },
  setup() {
    const store = useStore();

    // onMounted(() => {
    //   store.dispatch("auth/getUser");
    // });

    const user = computed(() => {
      return store.getters["auth/currentUser"];
    });

    return {
      user,
    };
  },
};
</script>