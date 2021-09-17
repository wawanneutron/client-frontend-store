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
        <dashboard />
      </div>
    </div>
  </div>
</template>

<script>
import CustomerMenu from "@/components/dashboard/Menu.vue";
import Dashboard from "@/components/dashboard/Dashboard.vue";

export default {
  components: {
    CustomerMenu,
    Dashboard,
  },
};
</script>