<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
/* css reset */
@import "./reset.css";
/* google font api */
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap");

* {
  font-family: "Nanum Gothic", sans-serif;
}
body {
  min-height: 1000px;
}
</style>
