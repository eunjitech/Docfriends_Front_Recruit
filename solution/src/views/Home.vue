<template>
  <div>
    <h1>닥프렌즈</h1>
    <div id="main">
      <Slide />
      <!-- 탭 메뉴 -->
      <div class="tab_menu">
        <button @click="companyBtn">소속 정보</button>
        <button @click="expertBtn">소속 전문가</button>
      </div>
      <!-- 소속 정보 -->
      <Company v-if="companyExpert === true" />
      <!-- 소속 전문가 -->
      <Expert v-else />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Slide from "../components/Slide.vue";
import Company from "../components/Company.vue";
import Expert from "../components/Expert.vue";

export default {
  name: "Home",
  components: { Slide, Company, Expert },
  data() {
    return {
      companyInfo: Object,
      expertInfo: Array,
      detailInfo: Object,
      companyExpert: true,
    };
  },
  methods: {
    mounted() {
      this.getCompanyData();
      this.getExpertData();
      this.getDetailData();
    },

    //company data 가져오기
    getCompanyData() {
      const companyUrl =
        "https://docfriends.github.io/Docfriends_Front_Recruit/api/company.json";
      axios
        .get(companyUrl)
        .then((res) => {
          console.log("company: ", res.data.data);
          this.companyInfo = res.data.data;
        })
        .catch((error) => {
          console.log("❌ Company data is not fetched. error : ", error);
        });
    },

    //exper data 가져오기
    getExpertData() {
      const expertUrl =
        "https://docfriends.github.io/Docfriends_Front_Recruit/api/companyExpert.json";
      axios
        .get(expertUrl)
        .then((res) => {
          console.log("expert: ", res.data.data.expertList);
          this.expertInfo = res.data.data.expertList;
        })
        .catch((error) => {
          console.log("❌ Expert data is not fetched. error : ", error);
        });
    },

    //detail data 가져오기
    getDetailData() {
      const detailUrl =
        "https://docfriends.github.io/Docfriends_Front_Recruit/api/expert.json";
      axios
        .get(detailUrl)
        .then((res) => {
          console.log("datail: ", res.data.data);
          this.detailInfo = res.data.data;
        })
        .catch((error) => {
          console.log("❌ Detail data is not fetched. error : ", error);
        });
    },

    //tab button 기능
    companyBtn() {
      this.companyExpert = true;
    },
    expertBtn() {
      this.companyExpert = false;
    },
  },
};
</script>

<style>
#main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  text-align: center;
  font-size: calc(1rem + 1.5vw);
  font-weight: 700;
  margin: calc(1em + 6vw);
}
/* ----------------Tap menu---------------- */
.tab_menu {
  margin-top: 100px;
  margin-bottom: 30px;
  text-align: center;
}
.tab_menu button {
  width: 370px;
  margin: auto 10px 10px 10px;
  padding: 30px;
  font-size: 1.4rem;
  border: 2px solid #dedede;
  border-radius: 65px;
  color: #a1a1a1;
  transition: all 0.3s;
}
.tab_menu button:hover {
  border: 2px solid #12ab00;
  color: #12ab00;
}

h3 {
  font-weight: 600;
}
</style>
