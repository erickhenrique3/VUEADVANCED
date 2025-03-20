<template>
  <div class="home">
    
    <Header :storeName="'Garoto de Programa'"  :logo="logoUrl('logo')" />
    <Carousel
      :navigation="true"
      :pagination="true"
      :startAutoPlay="false"
      :timeout="5000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="getImageUrl(slide)" alt="" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Slide from "../components/Slide.vue";
import Header from "../components/Header.vue";

export default {
  name: "Home",
  components: { Header, Carousel, Slide },
  setup() {
    const carouselSlides = ["bg-1", "bg-2", "bg-3"];

    const logoUrl = (logo) =>{
      return new URL(`../assets/${logo}.png`, import.meta.url).href;
    };
    const getImageUrl = (name) => {
      return new URL(`../assets/${name}.jpg`, import.meta.url).href;
    };

    return { carouselSlides, getImageUrl, logoUrl };
  },
};
</script>

<style lang="scss" scoped>
.home {
  /* Se necessário, ajuste o espaço acima do carrossel */
  // padding-top: 100px; /* Ajuste conforme o tamanho do seu header */
}

.carousel {
  position: relative;
  height: 400px; /* Definindo uma altura fixa para o carrossel */
  width: 100%;
  // overflow: hidden;
  margin-top: 0; /* Remover qualquer margem adicional, se necessário */

  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    img {
      min-width: 100%;
      height: 100%;
      object-fit: cover; /* Garantir que a imagem cubra o espaço */
    }
  }
}
</style>
