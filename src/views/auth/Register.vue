<template>
  <div class="auth container">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-8">
        <div class="card-group">
          <div class="card border-top-orange border-0 shadow">
            <div class="card-body">
              <div class="title">Register</div>
              <hr />
              <form @submit.prevent="register">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nama Lengkap"
                        aria-label="Nama Lengkap"
                        aria-describedby="basic-addon1"
                        v-model="user.name"
                      />
                    </div>
                    <div v-if="valid.name" class="alert alert-danger mt-2">
                      {{ valid.name[0] }}
                    </div>
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
                        v-model="user.email"
                      />
                    </div>
                    <div v-if="valid.email" class="alert alert-danger mt-2">
                      {{ valid.email[0] }}
                    </div>
                  </div>
                  <div class="col-lg-6">
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
                        v-model="user.password"
                      />
                    </div>
                    <div v-if="valid.password" class="alert alert-danger mt-2">
                      {{ valid.password[0] }}
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="fas fa-check-circle"></i>
                      </span>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Confirm Password"
                        aria-label="Confirm Password"
                        aria-describedby="basic-addon1"
                        v-model="user.confirm"
                      />
                    </div>
                    <div
                      v-if="valid.password"
                      class="alert alert-danger mt-2"
                    >
                      {{ valid.password[0] }}
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="d-grid d-md-block btn-login text-end">
                      <button class="btn btn-orange">REGISTER</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="title-register text-center mt-3">
        Sudah punya akun ?
        <router-link class="fw-bold" :to="{ name: 'login' }"
          >Login Disini</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    // state user
    const user = reactive({
      name: "",
      email: "",
      password: "",
      confirm: "",
    });
    // state validation
    const valid = ref([]);

    // store vuex
    const store = useStore();

    // route
    const router = useRouter();

    const register = () => {
      // define variable
      let name = user.name;
      let email = user.email;
      let password = user.password;
      let confirm = user.confirm;

      // send data to action auth vuex
      store
        .dispatch("auth/register", {
          name,
          email,
          password,
          confirm,
        })
        .then(() => {
          // redirect halaman
          router.push({ name: "dashboard" });
        })
        .catch((error) => {
          valid.value = error;
          console.log(valid);
        });
    };

    return {
      register,
      user,
      valid,
    };
  },
};
</script>

