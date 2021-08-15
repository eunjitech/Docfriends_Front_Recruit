<template>
  <div id="detail">
    <div>
      <img
        :src="detailInfo.profileImgPath"
        :alt="detailInfo.name"
        :title="detailInfo.name"
        width="140"
      />
      <div :class="detailInfo.alarmActivationState + '_active'"></div>
    </div>

    <span>{{ detailInfo.name }} {{ detailInfo.expertTypeName }}님</span>
    <span>♥︎ {{ detailInfo.likeCnt }}</span>
    <div class="detailBox">
      <div>
        <h3>학력 및 자격면허</h3>
        <span v-html="detailInfo.ability"></span>
      </div>
      <div>
        <h3>경력</h3>
        <span v-html="detailInfo.career"></span>
      </div>
      <div>
        <h3>진료과</h3>
        <span>{{ detailInfo.subject }}</span>
      </div>
      <div>
        <h3>알림 키워드</h3>
        <ul>
          <li v-for="list in detailInfo.alarmKeywordList" :key="list">
            #{{ list }}
          </li>
        </ul>
      </div>
      <div>
        <h3>소속 정보</h3>
        <span>{{ detailInfo.companyName }}</span
        ><span>{{ detailInfo.companyAddr }}{{ detailInfo.AddrEtc }}</span>
      </div>
    </div>
    <button @click="goHome">닥프렌즈 병원 바로가기 ></button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Detail",
  data() {
    return {
      detailInfo: Object,
    };
  },
  mounted() {
    this.getDetailData();
  },
  methods: {
    //detail data 가져오기
    getDetailData() {
      const detailUrl =
        "https://docfriends.github.io/Docfriends_Front_Recruit/api/expert.json";
      axios
        .get(detailUrl)
        .then((res) => {
          console.log("datail: ", res.data.data);
          this.detailInfo = res.data.data;
          this.detailInfo.ability = this.detailInfo.ability.replace(
            /\n/g,
            "<br />"
          );
          this.detailInfo.career = this.detailInfo.career.replace(
            /\n/g,
            "<br />"
          );
        })
        .catch((error) => {
          console.log("❌ Detail data is not fetched. error : ", error);
        });
    },

    //소속상세화면으로 가기
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
#detail {
  text-align: center;
}
#detail .detailBox {
  width: 90%;
  max-width: 1330px;
  text-align: left;
  padding: 60px;
  border: 2px solid #dedede;
  margin: 0 auto;
}
</style>
