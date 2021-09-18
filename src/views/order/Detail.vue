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
            <div class="table-responsive">
              <table class="table table-hover">
                <tr>
                  <td>No Invoice</td>
                  <td>:</td>
                  <td>2032342</td>
                </tr>
                <tr>
                  <td>Nama Lengkap</td>
                  <td>:</td>
                  <td>JENUDIN</td>
                </tr>
                <tr>
                  <td>No. Telp / WA</td>
                  <td>:</td>
                  <td>090888002323</td>
                </tr>
                <tr>
                  <td>KURIR / SERVICE / COST</td>
                  <td>:</td>
                  <td>JNE / YESS / Rp. 19.000</td>
                </tr>
                <tr>
                  <td>Alamat Lengkap</td>
                  <td>:</td>
                  <td>Kp Jonggol Ds Jonggol Kec Jonggol bogor</td>
                </tr>
                <tr>
                  <td>Total pembelian</td>
                  <td>:</td>
                  <td>Rp. 45.000.000</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>:</td>
                  <td>
                    <button class="btn btn-primary">BAYAR SEKARANG</button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div
          class="
            card card-dashboard
            border-top-orange border-0
            rounded
            shadow
            mt-4
          "
        >
          <div class="card-body">
            <div class="title">
              <i class="fa fa-shopping-cart"></i>
              Item Order
            </div>
            <hr />
            <table
              class="table"
              style="
                border-style: solid !important;
                border-color: rgb(198, 206, 214) !important;
              "
            >
              <tbody>
                <tr style="background: #edf2f7">
                  <td class="b-none" width="25%">
                    <div class="wrapper-image-cart">
                      <img
                        src="https://adminsport.my.id/storage/product-images/C0xC1yOy34P8lNBxHxPL0rHgRh9Vqd3cJ9xZatFy.jpg"
                        class="w-100"
                      />
                    </div>
                  </td>
                  <td class="b-none" width="50%">
                    <h5>
                      <b>Footwear original</b>
                    </h5>
                    <table class="table-borderless" style="font-size: 14px">
                      <tr>
                        <td style="padding: 0.2rem">QTY</td>
                        <td style="padding: 0.2rem">:</td>
                        <td style="padding: 0.2rem">
                          <b>3</b>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td class="b-none text-right">
                    <p class="m-0 font-weight-bold">Rp. 500.000.000</p>
                  </td>
                </tr>
              </tbody>
            </table>
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