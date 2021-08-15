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
        <div>
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
          <div :class="expertBox.alarmActivationState + '_active'"></div>
        </div>

        <span>{{ expertBox.name }} {{ expertBox.expertTypeName }}님</span>
        <span>{{ companyInfo.name }}</span>
        <span>♥︎ {{ expertBox.likeCnt }}</span>
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
  grid-template-columns: repeat(3, minmax(300px, auto));
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
}
#expert ul li:first-child {
  cursor: pointer;
}
</style>
