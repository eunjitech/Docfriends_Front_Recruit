<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://cdn.pixabay.com/photo/2021/07/14/09/14/siberian-cat-6465485_1280.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://cdn.pixabay.com/photo/2021/07/20/18/19/bald-eagle-6481346_1280.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://cdn.pixabay.com/photo/2021/08/07/00/30/dog-6527479_1280.jpg"
          class="d-block w-100"
          alt="..."
        />
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
};
</script>
<style>
.carousel {
  width: 100%;
}
.carousel-indicators [data-bs-target] {
  width: 23px;

  border-radius: 100%;
  background: #dedede;
}
.carousel-indicators .active {
  background: #12ab00;
}
.carousel-inner {
  max-width: 590px;
  width: 100%;
  margin: 0 auto;
}
.carousel-inner > .carousel-item > img {
  max-width: 590px !important;
  /* max-height: 350px !important; */
}
.carousel-indicators {
  bottom: -50px;
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
  filter: drop-shadow(1px 1px 2px rgb(0 0 0));
}
</style>
