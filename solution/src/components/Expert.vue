<template>
  <div id="expert">
    <ul>
      <li
        v-for="(i, index) in 5"
        :key="index"
        @click="
          if (index === 0) {
            detailBtn();
          }
        "
      >
        <img
          src="https://image.flaticon.com/icons/png/512/2307/2307756.png"
          alt="dd"
          width="140"
        />
        <span>김관호 의사님</span>
        <span>닥프렌즈 병원</span>
        <span>좋아요</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Expert",
  methods: {
    // detail 페이지 링크 기능
    detailBtn() {
      this.$router.push("/detail");
    },
  },
};

//525, 485
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
