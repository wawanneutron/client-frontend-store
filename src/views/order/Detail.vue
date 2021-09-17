<template>
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item parent">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumb-item parent">
          <router-link :to="{ name: 'order' }">History</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Detail Order</li>
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
              <i class="fa fa-shopping-cart"></i>
              Detail Order
            </div>
            <hr />
            <h1>Detail</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomerMenu from "@/components/dashboard/Menu.vue";
export default {
  components: {
    CustomerMenu,
  },
};
</script>