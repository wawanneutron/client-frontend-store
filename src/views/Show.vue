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
            <transition name="slide-fade" mode="out-in">
              <img
                src="https://adminsport.my.id/storage/product-images/t6EeU2RIKGE5ApMEG8HWt1G8X7mRa4K8Elbyv8A5.png"
                class="img-store img-fluid w-100"
              />
            </transition>
            <!-- thumbnail -->
            <div class="row justify-content-center">
              <div class="col-md-3 col-4 col-thumbnail">
                <img
                  class="w-100 img-thumbnail float-left"
                  src="https://adminsport.my.id/storage/product-images/t6EeU2RIKGE5ApMEG8HWt1G8X7mRa4K8Elbyv8A5.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <label class="font-weight-bold" style="font-size: 20px">
              Macbook Pro M1 Chipset
            </label>
            <hr />
            <div
              class="price-product"
              id="price-product"
              style="font-size: 1.35rem"
            >
              <span class="font-weight-bold mr-4">Rp. 18.000.000</span>
              <s class="font-weight-bold">Rp. 21.000.000</s>
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
                      DISKON 15 %
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
                      1500 gram</span
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
                      23 stock</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <button class="btn btn-orange btn-lg btn-block">
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
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              doloremque nisi consequatur inventore delectus dolorem corporis
              sunt. Nesciunt maiores asperiores explicabo, doloremque id nam
              perferendis tempore dolor sequi nihil sit!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>