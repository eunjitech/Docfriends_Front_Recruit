<template>
  <div id="expert">
    <ul>
      <li
        v-for="(expertBox, i) in expertInfo.expertList"
        :key="i"
        @click="
          if (i === 0) {
            detailBtn();
          }
        "
      >
        <div class="profile__mask">
          <img
            :src="
              expertBox.profileImgPath
                ? expertBox.profileImgPath
                : require(`@/assets/profile.png`)
            "
            :alt="expertBox.name"
            :title="expertBox.name"
            width="140"
          />
        </div>
        <div
          :class="expertBox.alarmActivationState + '_active'"
          class="alarmState"
        ></div>
        <div class="profile__text">
          <span class="profile__name"
            >{{ expertBox.name }} {{ expertBox.expertTypeName }}님</span
          >
          <span class="profile__company">{{ companyInfo.name }}</span>
        </div>
        <span class="profile__like">♥︎ {{ expertBox.likeCnt }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Expert",
  props: { expertInfo: Object, companyInfo: Object },
  methods: {
    // detail 페이지 라우터 연결
    detailBtn() {
      this.$router.push("/detail");
    },
  },
};
</script>
<style>
#expert {
  width: 100%;
  max-width: 1000px;
  margin: auto;
}
#expert ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 20px;
  column-gap: 30px;
  padding-left: 0;
  place-items: center;
}
#expert ul li {
  width: 300px;
  height: 320px;
  border: 2px solid #dedede;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  row-gap: 25px;
  text-align: center;
}
#expert ul li:first-child {
  cursor: pointer;
}
.profile__mask {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 2px 2px 3px #dedede;
}
.profile__mask img {
  width: 100%;
}
li:first-child .profile__mask img {
  width: 107%;
}
.profile__text {
  display: flex;
  flex-direction: column;
}
.profile__name {
  font-size: 1.3rem;
  font-weight: 700;
}
.profile__company {
  font-size: 1.2rem;
  color: #a1a1a1;
}
.profile__like {
  color: #ff7d00;
}

/* 상태알림 */
.alarmState {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 4px solid #fff;
  background: #000;
  position: absolute;
  top: 120px;
  right: 96px;
}

.N_active {
  background: #dedede;
}
.Y_active {
  background: #12ab00;
}
</style>
