<template>
  <div id="detail">
    <div class="profile">
      <div class="profile__mask">
        <img
          :src="detailInfo.profileImgPath"
          :alt="detailInfo.name"
          :title="detailInfo.name"
        />
        <div
          :class="detailInfo.alarmActivationState + '_active'"
          class="alarmState"
        ></div>
      </div>
      <span class="profile__name"
        >{{ detailInfo.name }} {{ detailInfo.expertTypeName }}님</span
      >
      <span class="profile__like">♥︎ {{ detailInfo.likeCnt }}</span>
    </div>
    <div class="detail__box">
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
    <button @click="goHome" class="button">닥프렌즈 병원 바로가기 ></button>
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
          this.detailInfo = res.data.data;
          this.detailInfo.ability = this.detailInfo.ability.replace(
            /\n/g,
            "<br>"
          );
          this.detailInfo.career = this.detailInfo.career.replace(
            /\n/g,
            "<br>"
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
  align-items: center;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-top: 30px;
}
#detail .profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
#detail .profile .N_active {
  position: absolute;
  right: 9px;
  top: 88px;
}
#detail span {
  color: #565656;
}

#detail ul {
  color: #565656;
  padding-left: 0;
  display: flex;
}
#detail ul li {
  color: #a1a1a1;
  margin-right: 10px;
}

#detail .profile__like {
  color: #ff7d00;
}
.detail__box {
  width: 90%;
  max-width: 1330px;
  text-align: left;
  padding: 60px;
  border: 2px solid #dedede;
  margin: 0 auto;
}
.detail__box div {
  margin-bottom: 30px;
}
.detail__box div h3 {
  margin-bottom: 10px;
}
</style>
