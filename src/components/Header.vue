<template>
  <header class="section-header fixed-top">
    <section class="header-main border-bottom">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-3 col-7">
            <router-link to="/" class="text-decoration-none" data-abc="true">
              <span class="logo"
                ><i class="fas fa-shopping-bag me-2"></i>Jhopri
              </span></router-link
            >
          </div>
          <div class="col-md-5 d-none d-md-block">
            <form class="search-wrap">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="mau belanja apa hari ini ?"
                  aria-label="mau belanja apa hari ini ?"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn search-button"
                  type="button"
                  id="button-addon2"
                >
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </form>
          </div>
          <div class="col-md-4 col-5">
            <div class="d-flex justify-content-end">
              <div class="cart-header">
                <router-link
                  :to="{ name: 'register' }"
                  class="btn search-button btn-md"
                  ><i class="fa fa-shopping-cart"></i> 0 | Rp. 0
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- sub navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <form class="search-wrap">
          <div class="input-group d-md-none w-100">
            <input
              type="text"
              class="form-control search-form"
              style="width: 55%; border: 1px solid #ffffff"
              name="q"
              placeholder="mau beli apa hari ini ?"
            />
            <div class="input-group-append">
              <button class="btn search-button-mobile" type="submit">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </form>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-list-ul"></i>
                Kategori
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                <i class="fa fa-shopping-bag"></i>
                Semua Produk</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-info-circle"></i>Tentang</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fa fa-comments"></i>Kontak</a
              >
            </li>
          </ul>
          <div class="account">
            <router-link :to="{ name: 'login' }" class="btn"
              ><i class="fa fa-user-circle"></i> ACCOUNT</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

