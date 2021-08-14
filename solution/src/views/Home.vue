<template>
  <div>
    <h1>haha</h1>
    <div id="main">
      <Slide />
      <!-- 탭 메뉴 -->
      <div class="tap_menu">
        <button>소속 정보</button>
        <button>소속 전문가</button>
      </div>
      <!-- 소속 정보 -->
      <div id="company">
        <div>
          <h3>알림 키워드</h3>
          <ul>
            <li>#한방소아청소년과</li>
          </ul>
        </div>
        <div><h3>병원 홈페이지</h3></div>
        <div><h3>병원 전화번호</h3></div>
        <div>
          <h3>주소</h3>
          <span>서울 특별시</span>
          <div id="map" ref="map"></div>
        </div>
      </div>
      <!-- 소속 전문가 -->
      <div id="expert"></div>
    </div>
  </div>
</template>

<script>
import Slide from "../components/Slide.vue";
import { Loader } from "@googlemaps/js-api-loader";
import axios from "axios";

export default {
  name: "Home",
  components: { Slide },
  data() {
    return {
      companyInfo: Object,
      expertInfo: Array,
      detailInfo: Object,
    };
  },
  methods: {
    created() {
      this.getCompanyData();
      this.getExpertData();
      this.getDetailData();
    },
    mounted() {
      this.getMap();
    },

    //google map 가져오기
    getMap() {
      const currentPostiion = {
        lat: Number(37.126019),
        lng: Number(126.916331),
      };
      const loader = new Loader({
        apiKey: process.env.VUE_APP_KEY,
      });
      loader.load().then(() => {
        const googleMap = new google.maps.Map(this.$refs.map, {
          center: currentPostiion,
          zoom: 17,
          zoomControl: false,
          streetViewControl: false,
        });
        new google.maps.Marker({
          position: currentPostiion,
          map: googleMap,
        });
      });
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
.tap_menu {
  margin-top: 100px;
  margin-bottom: 30px;
}
.tap_menu button {
  width: 370px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 30px;
  font-size: 1.4rem;
  border: 2px solid #dedede;
  border-radius: 65px;
  color: #a1a1a1;
  transition: all 0.3s;
}
.tap_menu button:hover {
  border: 2px solid #12ab00;
  color: #12ab00;
}

h3 {
  font-weight: 600;
}
/* ---------------Company--------------- */
#company {
  width: 90%;
  max-width: 1330px;
  text-align: left;
  padding: 60px;
  border: 2px solid #dedede;
}
#company > div {
  margin-bottom: 85px;
  line-height: 35px;
}

#company ul {
  padding-left: 0;
  display: flex;
}
#company ul li {
  margin-right: 10px;
  color: #a1a1a1;
}

#map {
  height: 750px;
}
</style>
