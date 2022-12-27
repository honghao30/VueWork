<template>
  <div>
    <nav class="nav nav-pills nav-fill">
      <RouterLink class="nav-link" :to="{ name: 'workOne', replace: true }">
        점심메뉴
      </RouterLink>
      <RouterLink class="nav-link" :to="{ name: 'workTwo', replace: true }">
        할일앱
      </RouterLink>
    </nav>
    <hr />
    <RouterView></RouterView>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
