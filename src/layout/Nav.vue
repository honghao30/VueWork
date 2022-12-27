<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">VueWork</RouterLink>
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
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/about"
              >With Vue</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/weather"
              >날씨 정보</RouterLink
            >
          </li>

          <li class="nav-item dropdown">
            <RouterLink class="nav-link" active-class="active" to="/nested"
              >My Work</RouterLink
            >
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" />
          <button class="btn btn-danger" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav-link,
.navbar-brand {
  color: #fff;
  &.active {
    font-weight: bold;
    color: #fff;
  }
}
.navbar-brand {
  flex-grow: 0.1;
  display: flex;
  justify-content: center;
}
.navbar-expand-lg .navbar-collapse {
  flex-grow: 2;
}

.navbar-expand-lg .navbar-nav {
  flex-direction: row;
  gap: 60px;
}
</style>
