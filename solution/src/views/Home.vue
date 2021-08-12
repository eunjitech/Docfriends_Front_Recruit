<template>
  <div>
    <h1>닥프렌즈 병원</h1>
    <div id="content">
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
        </div>
      </div>
      <!-- 소속 전문가 -->
      <div id="expert"></div>
    </div>
  </div>
</template>

<script>
import Slide from "../components/Slide.vue";

export default {
  name: "Home",
  components: { Slide },
};
</script>

<style>
#content {
  display: flex;
  justify-content: center;
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
</style>
