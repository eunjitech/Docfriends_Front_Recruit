<template>
  <div id="company">
    <div>
      <h3>알림 키워드</h3>
      <ul>
        <li v-for="list in companyInfo.alarmKeywordList" :key="list">
          #{{ list }}
        </li>
      </ul>
    </div>
    <div>
      <h3>병원 홈페이지</h3>
      <a :href="companyInfo.homepageUrl" target="_blank">{{
        companyInfo.homepageUrl
      }}</a>
    </div>
    <div>
      <h3>병원 전화번호</h3>
      <a :href="'tel:' + companyInfo.tel" ref="telNum">{{ companyInfo.tel }}</a>
    </div>
    <div>
      <h3>주소</h3>
      <span>{{ companyInfo.addrRoad + " " + companyInfo.addrEtc }}</span>
      <div id="map" ref="map"></div>
    </div>
  </div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";

export default {
  name: "Company",
  props: { companyInfo: Object },
  watch: {
    companyInfo() {
      this.getMap();
      this.addHyphen();
    },
  },
  mounted() {
    this.getMap();
  },
  methods: {
    //google map 가져오기
    getMap() {
      const currentPostiion = {
        lat: Number(this.companyInfo.lat),
        lng: Number(this.companyInfo.lon),
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
    //전화번호에 하이픈 넣기
    addHyphen() {
      this.companyInfo.tel = this.companyInfo.tel.replace(
        /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
        "$1-$2-$3"
      );
    },
  },
};
</script>
<style>
h3 {
  font-size: calc(0.9rem + 1vw);
  font-weight: 600;
}

#company {
  width: 90%;
  max-width: 1024px;
  margin-bottom: 200px;
  padding: 60px;
  text-align: left;
  border: 2px solid #dedede;
}
#company > div {
  margin-bottom: 53px;
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
  height: 530px;
  top: 10px;
}
</style>
