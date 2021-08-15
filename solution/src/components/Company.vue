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
  name: "Companye",
  props: { companyInfo: Array },
  mounted() {
    this.getMap();
  },
  methods: {
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
  },
};
</script>
<style>
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
