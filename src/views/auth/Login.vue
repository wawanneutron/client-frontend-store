<template>
  <div class="auth container">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <div class="card-group">
          <div class="card border-top-orange border-0 shadow">
            <div class="card-body">
              <div class="title">Login</div>
              <hr />
              <form action="">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <i class="fa fa-envelope"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <i class="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div class="d-grid btn-login">
                  <button class="btn btn-orange">LOGIN</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="title-register text-center mt-3">
        Belum punya akun ?
        <router-link class="fw-bold" :to="{ name: 'register' }"
          >Daftar Sekarang</router-link
        >
      </div>
    </div>
  </div>
</template>

