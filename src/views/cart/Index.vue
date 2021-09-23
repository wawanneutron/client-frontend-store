<template>
  <div class="container-fluid mb-5 mt-4">
    <div class="row">
      <div class="col-md-6">
        <div class="card border-0 shadow rounded">
          <div class="card-body">
            <h5><i class="fa fa-shopping-cart mr-2"></i>Detail Pesanan</h5>
            <hr />
            <table
              class="table"
              style="
                border-style: solid !important;
                border-color: rgb(198, 206, 214) !important;
              "
            >
              <tbody>
                <template v-for="cart of carts" :key="cart.id">
                  <tr>
                    <td width="25%">
                      <div class="image-cart">
                        <img
                          :src="cart.product.gallery[0].image"
                          style="width: 100%; border-radius: 0.5rem"
                        />
                      </div>
                    </td>
                    <td class="" width="50%">
                      <h5>
                        <b> {{ cart.product.title }} </b>
                      </h5>
                      <table class="table-borderless" style="font-size: 14px">
                        <tr>
                          <td style="padding: 0.2rem">QTY</td>
                          <td style="padding: 0.2rem">:</td>
                          <td style="padding: 0.2rem">
                            <b> {{ cart.quantity }} </b>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td class="text-right">
                      <div class="price">Rp. {{ moneyFormat(cart.price) }}</div>
                      <p class="m-0">
                        <s style="text-decoration-color: red">
                          Rp.
                          {{
                            moneyFormat(cart.product.price * cart.quantity)
                          }}</s
                        >
                      </p>

                      <br />
                      <div class="text-right">
                        <button
                          @click.prevent="removeCart(cart.id)"
                          class="btn btn-sm btn-danger"
                        >
                          <i class="fa fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>

            <table class="table table-default">
              <tbody>
                <tr>
                  <td class="text-left" width="60%">
                    <p class="m-0">Jumlah</p>
                  </td>
                  <td class="text-right" width="30%">&nbsp; :</td>
                  <td class="text-right set-td">
                    <p class="m-0">Rp. {{ moneyFormat(total) }}</p>
                  </td>
                </tr>
                <tr>
                  <td class="set-td text-left border-0">
                    <p class="m-0">ONGKOS KIRIM (<strong>1500</strong> gram)</p>
                  </td>
                  <td class="set-td border-0 text-right">&nbsp; :</td>
                  <td class="set-td border-0 text-right">
                    <p class="m-0" id="ongkir-cart">Rp.120.000</p>
                  </td>
                </tr>
                <tr>
                  <td class="text-left border-0">
                    <p class="font-weight-bold m-0 h5 text-uppercase">
                      Grand Total
                    </p>
                  </td>
                  <td class="border-0 text-right">&nbsp; :</td>
                  <td class="border-0 text-right">
                    <p class="font-weight-bold m-0 h5" align="right">
                      18.120.000
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-6 rincian-pengiriman">
        <div class="card border-0 shadow rounded">
          <div class="card-body">
            <h5><i class="fa fa-user circle mr-2"></i>Rincian Pengiriman</h5>
            <hr />
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="name" class="font-weight-bold"
                    >Nama Lengkap</label
                  >
                  <input
                    type="text"
                    id="nama_lengkap"
                    class="form-control"
                    placeholder="Nama lengkap"
                    v-model="state.name"
                  />
                  <!-- <div v-if="validation.name" class="mt-2 alert alert-danger">
                    Masukan nama lengkap anda
                  </div> -->
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="phone_number" class="font-weight-bold"
                    >No. Hp / Whatsapp</label
                  >
                  <input
                    type="number"
                    id="phone_number"
                    class="form-control"
                    placeholder="No. Hp / Whatsapp"
                    v-model="state.phone"
                  />
                  <!-- <div v-if="validation.phone" class="mt-2 alert alert-danger">
                    Masukan No. telpon anda
                  </div> -->
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label for="province" class="font-weight-bold"
                    >Provinsi</label
                  >
                  <select
                    class="form-control"
                    id="province"
                    v-model="state.provinsi_id"
                    @change="getCities"
                  >
                    <option value="">-- pilih provinsi --</option>
                    <template
                      v-for="provinsi of state.provinces"
                      :key="provinsi.id"
                    >
                      <option :value="provinsi.province_id">
                        {{ provinsi.name }}
                      </option>
                    </template>
                  </select>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label for="city" class="font-weight-bold"
                    >Kota / kabupaten</label
                  >
                  <select class="form-control" id="city">
                    <option value="">-- pilih kota --</option>
                    <template v-for="city of state.cities" :key="city.id">
                      <option>{{ city.name }}</option>
                    </template>
                  </select>
                </div>
              </div>
              <!-- kurir pengiriman -->
              <div class="col-md-12">
                <div class="form-group">
                  <label class="font-weight-bold mb-3">Kurir Pengiriman</label>
                  <br />
                  <!-- jne -->
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="shipping_jne"
                      value="jne"
                    />
                    <label
                      for="shipping_jne"
                      class="form-check-label font-weight-bold mr-4"
                      >JNE</label
                    >
                  </div>
                  <!-- tiki -->
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="shipping_tiki"
                      value="tiki"
                    />
                    <label
                      for="shipping_tiki"
                      class="form-check-label font-weight-bold mr-4"
                      >TIKI</label
                    >
                  </div>
                  <!-- pos -->
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="shipping_pos"
                      value="pos"
                    />
                    <label
                      for="shipping_pos"
                      class="form-check-label font-weight-bold mr-4"
                      >POS</label
                    >
                  </div>
                </div>
              </div>
              <!-- service kurir serta ongkos kirim -->
              <div class="col-md-12">
                <div class="form-group">
                  <div>
                    <hr />
                    <label class="font-weight-bold mb-3">Service Kurir</label>
                    <br />
                    <!-- <div class="alert alert-danger" v-if="state.costs == 0">
                      <span
                        >Pengiriman
                        <b>{{ state.courier_type.toUpperCase() }}</b> tidak ada
                        ke kota tujuan anda</span
                      >
                    </div> -->
                    <div class="form-check form-check-inline">
                      <input type="radio" class="form-check-input mb-3" />
                      <label
                        class="form-check-label font-weight-normal mr-5 mb-3"
                      >
                        YES - Rp. 27.000
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <!-- estimasi -->
              <div class="col-md-12">
                <div>
                  <label class="font-weight-bold mb-3">Estimasi Sampai</label>
                  <br />
                  <!-- <span v-if="state.courier_type == 'pos'"
                    >{{ state.costs[0].cost[0].etd }} Pengiriman</span
                  >
                  <span v-else
                    >{{
                      state.costs == 0
                        ? ((state.etd = false),
                          (state.courier_cost = 0),
                          (state.grandTotal = 0))
                        : state.costs[0].cost[0].etd + " Hari Pengiriman"
                    }}
                  </span> -->
                </div>
                <hr />
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label class="font-weight-bold" id="alamat"
                    >Alamat Lengkap</label
                  >
                  <textarea
                    class="form-control"
                    id="alamat"
                    rows="3"
                    placeholder="Alamat Lengkap&#10;&#10;Contoh: Perum Badak Triraksa - Tigaraksa Kab. Tangerang"
                    v-model="state.address"
                  ></textarea>
                  <div class="mt-2 alert alert-danger">
                    Masukan alamat dengan lengkap
                  </div>
                </div>
              </div>
              <button
                @click.prevent="checkout"
                class="btn btn-orange btn-lg btn-block text-uppercase"
              >
                checkout
              </button>
              <!-- <div
                v-if="state.buttonCheckout || checkout.length > 0"
                class="col-md-12"
              >
                <button
                  @click.prevent="checkout"
                  class="btn btn-primary btn-lg btn-block text-uppercase"
                >
                  checkout
                </button>
              </div>
              <div class="col-md-12" v-else>
                <div v-if="state.buttonLoading">
                  <button
                    class="btn btn-success btn-lg btn-block text-uppercase"
                  >
                    <i class="fa fa-spinner fa-spin"></i>Loading
                  </button>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import Api from "@/api/Api.js";
import { onMounted } from "@vue/runtime-core";

export default {
  setup() {
    const store = useStore();

    const carts = computed(() => {
      return store.getters["cart/getCart"];
    });
    const total = computed(() => {
      return store.getters["cart/getTotalCart"];
    });
    const removeCart = (cart_id) => {
      console.log(cart_id);
      if (confirm("loe mau hapus ?")) {
        if (confirm("ini permanen")) {
          alert("tekan oke");
          store.dispatch("cart/removeCart", cart_id);
        }
      }
    };
    /* state */
    const state = reactive({
      name: "",
      phone: "",
      address: "",
      provinces: [],
      provinsi_id: "",
      cities: [],
    });
    /* provinsi */
    const getProvinces = onMounted(() => {
      Api.get("/rajaongkir/provinces")
        .then((response) => {
          state.provinces = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    });
    /* kota kabupaten */
    const getCities = () => {
      Api.get("/rajaongkir/cities", {
        params: {
          province_id: state.provinsi_id,
        },
      })
        .then((response) => {
          state.cities = response.data.data;
          console.log(state.cities);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    /* checkout */
    const checkout = () => {
      console.log([state.name, state.phone, state.address, state.provinsi_id]);
    };

    return {
      carts,
      total,
      removeCart,
      state,
      getProvinces,
      getCities,
      checkout,
    };
  },
};
</script>