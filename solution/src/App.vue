<template>
  <div v-if="loaded">
    <Header />
    <router-view :companyInfo="companyInfo" :expertInfo="expertInfo" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      companyInfo: Object,
      expertInfo: Object,
      loaded: false,
    };
  },
  mounted() {
    this.getCompanyData();
    this.getExpertData();
  },
  methods: {
    //company data 가져오기
    getCompanyData() {
      const companyUrl =
        "https://docfriends.github.io/Docfriends_Front_Recruit/api/company.json";
      axios
        .get(companyUrl)
        .then((res) => {
          this.companyInfo = res.data.data;
        })
        .catch((error) => {
          console.log("❌ Company data is not fetched. error : ", error);
        });
      this.loaded = true;
    },

    //exper data 가져오기
    getExpertData() {
      const expertUrl =
        "https://docfriends.github.io/Docfriends_Front_Recruit/api/companyExpert.json";
      axios
        .get(expertUrl)
        .then((res) => {
          this.expertInfo = res.data.data;
        })
        .catch((error) => {
          console.log("❌ Expert data is not fetched. error : ", error);
        });
    },
  },
};
</script>

<style>
/* css reset */
@import "./assets/reset.css";
/* google font api */
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap");

* {
  font-family: "Nanum Gothic", sans-serif;
}
body {
  min-height: 1000px;
}
</style>
