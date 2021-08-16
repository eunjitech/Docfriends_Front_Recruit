<template>
  <div>
    <h1>{{ companyInfo.name }}</h1>
    <div id="main">
      <Slide :companyInfo="companyInfo" />
      <!-- 탭 메뉴 -->
      <div class="tab_menu">
        <button
          :class="{ colorOn: this.companyExpert }"
          @click="companyBtn"
          class="button"
        >
          소속 정보
        </button>
        <button
          :class="{ colorOn: this.companyExpert === false }"
          @click="expertBtn"
          class="button"
        >
          소속 전문가
        </button>
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
  font-size: calc(1rem + 1vw);
  font-weight: 700;
  margin: calc(1em + 1vw);
}
a {
  text-decoration: none;
  color: #12ab00;
}
/* ----------------Tap menu---------------- */
.tab_menu {
  margin-top: 55px;
  margin-bottom: 30px;
  text-align: center;
}
.button {
  width: 310px;
  margin: auto 10px 10px 10px;
  padding: 23px;
  font-size: 1.4rem;
  color: #a1a1a1;
  border: 2px solid #dedede;
  border-radius: 65px;
  transition: all 0.3s;
}
.button:hover {
  border-color: #12ab00;
  color: #12ab00;
}
.colorOn {
  border-color: #12ab00;
  color: #12ab00;
}
</style>
