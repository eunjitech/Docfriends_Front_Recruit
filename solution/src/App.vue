<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

console.log(process.env);

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
@import "./reset.css";
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap");
* {
  font-family: "Nanum Gothic", sans-serif;
}
body {
  min-height: 1000px;
}
</style>
