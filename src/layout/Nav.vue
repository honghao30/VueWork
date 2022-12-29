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
            <RouterLink class="nav-link" active-class="active" to="/about"
              >About Me</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/weather"
              >날씨 정보</RouterLink
            >
          </li>

          <li class="nav-item dropdown">
            <RouterLink class="nav-link" active-class="active" to="/nested"
              >Vue UI</RouterLink
            >
          </li>
        </ul>
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
  justify-content: flex-start;
}
.navbar-expand-lg .navbar-collapse {
  //flex-grow: 2;
  justify-content: flex-end;
}
.navbar-collapse {
  flex-basis: auto;
  flex-grow: 0;
}

.navbar-expand-lg .navbar-nav {
  flex-direction: row;
  gap: 60px;
}
.navbar.sticky {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  transition: 150ms;
  box-shadow: 0px 15px 10px -15px #111;
  background-color: #ccd6dd;
  z-index: 10;
}
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  transition: 150ms;
  box-shadow: 0px 15px 10px -15px #111;
  background-color: #ccd6dd;
  z-index: 10;
}
.header_off {
  top: -100px;
}
</style>
