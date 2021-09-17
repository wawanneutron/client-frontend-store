<template>
  <div class="card card-dashboard border-top-orange border-0 shadow mb-5">
    <div class="card-body">
      <div class="title">Main Menu</div>
      <hr />
      <ul class="list-group">
        <router-link
          :to="{ name: 'dashboard' }"
          class="list-group-item menuItem-active-link"
        >
          <i class="fa fa-tachometer-alt"></i>
          Dashboard
        </router-link>
        <router-link
          :to="{ name: 'order' }"
          class="list-group-item menuItem-active-link"
        >
          <i class="fa fa-shopping-cart"></i>
          My Orders
        </router-link>
        <a href="#" class="list-group-item">
          <i class="fa fa-sign-out-alt"></i>
          Logout
        </a>
      </ul>
    </div>
  </div>
</template>