<template>
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item parent">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">My Order</li>
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
              My Order
            </div>
            <hr />
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">INVOICE</th>
                    <th scope="col">NAME</th>
                    <th scope="col">COURIER</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">GRAND TOTAL</th>
                    <th scope="col">OPTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>
                      <router-link
                        :to="{ name: 'detail-order' }"
                        class="btn btn-sm btn-secondary"
                      >
                        <i class="fas fa-eye mr-2"></i> detail
                      </router-link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>
                      <router-link
                        :to="{ name: 'detail-order' }"
                        class="btn btn-sm btn-secondary"
                      >
                        <i class="fas fa-eye mr-2"></i> detail
                      </router-link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>
                      <router-link
                        :to="{ name: 'detail-order' }"
                        class="btn btn-sm btn-secondary"
                      >
                        <i class="fas fa-eye mr-2"></i> detail
                      </router-link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>ok</td>
                    <td>ok</td>
                    <td>ok</td>
                    <td>ok</td>
                    <td>
                      <router-link
                        :to="{ name: 'detail-order' }"
                        class="btn btn-sm btn-secondary"
                      >
                        <i class="fas fa-eye mr-2"></i> detail
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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