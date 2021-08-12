<template>
  <div id="header">
    <a href="/">
      <img src="../assets/logo.png" alt="logo" class="logo" />
    </a>
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
.logo {
  width: 170px;
  margin-left: 20px;
}
</style>
