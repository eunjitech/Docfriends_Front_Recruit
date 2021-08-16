<template>
  <div id="header">
    <div class="header__container">
      <a href="/">
        <img src="../assets/logo.png" alt="logo" class="logo" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
#header {
  width: 100%;
  height: 80px;
  background-color: #2abbb6;
  display: flex;
  align-items: center;
}
.header__container {
  width: 1024px;
  margin: 0 auto;
}
.logo {
  width: 130px;
}
</style>
