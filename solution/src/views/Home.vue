<template>
  <div>
    <h1>닥프렌즈 병원</h1>
    <div id="content">
      <Slide />
      <!-- 소속정보, 소속전문가 -->
      <!-- map api -->
      <!-- expert -->
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
}
h1 {
  text-align: center;
  font-size: calc(1rem + 1.5vw);
  font-weight: 700;
  margin: calc(1em + 6vw);
}
</style>
