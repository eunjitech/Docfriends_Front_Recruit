<template>
  <div>
    <h1>{{ companyInfo.name }}</h1>
    <div id="main">
      <Slide :companyInfo="companyInfo" />
      <!-- 탭 메뉴 -->
      <div class="tab_menu">
        <button @click="companyBtn">소속 정보</button>
        <button @click="expertBtn">소속 전문가</button>
      </div>
      <!-- 소속 정보 -->
      <Company v-if="companyExpert === true" :companyInfo="companyInfo" />
      <!-- 소속 전문가 -->
      <Expert v-else :expertInfo="expertInfo" :companyInfo="companyInfo" />
    </div>
  </div>
</template>

<script>
import Slide from "../components/Slide.vue";
import Company from "../components/Company.vue";
import Expert from "../components/Expert.vue";

export default {
  name: "Home",
  components: { Slide, Company, Expert },
  data() {
    return { companyExpert: true };
  },
  props: { companyInfo: Object, expertInfo: Object },
  methods: {
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
