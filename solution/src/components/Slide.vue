<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        v-for="(image, i) in companyInfo.imagePathList"
        :key="i"
        :class="{ active: i == 0 }"
        :aria-current="{ true: i == 0 }"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        :data-bs-slide-to="i"
        :aria-label="'Slide ' + (i + 1)"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        class="carousel-item"
        :class="{ active: i == 0 }"
        v-for="(image, i) in companyInfo.imagePathList"
        :key="image"
      >
        <img :src="image" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "Slide",
  props: { companyInfo: Object },
};
</script>
<style>
.carousel {
  width: 90%;
  max-width: 1050px;
}
.carousel-indicators [data-bs-target] {
  width: 13px;
  height: 13px;
  border: 0;
  border-radius: 100%;
  background: #dedede;
}
.carousel-indicators .active {
  background: #12ab00;
}
.carousel-inner {
  max-width: 530px;

  /* height: 400px;  */
  width: 100%;
  margin: 0 auto;
}
.carousel-inner > .carousel-item {
  height: 300px;
}
.carousel-inner > .carousel-item > img {
  max-width: 530px !important;
}
.carousel-indicators {
  bottom: -40px;
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
  filter: drop-shadow(0px 0px 2px rgb(0 0 0));
  width: 3rem;
  height: 3rem;
}
</style>
