<template>
  <div class="home">
    
    <Header :storeName="'Minha loja'"  :logo="logoUrl('logo')" />
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
    <div class="cards">
      <Card v-for="product in products" :key="product.id" :product="product"/>

    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Slide from "../components/Slide.vue";
import Header from "../components/Header.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: { Header, Carousel, Slide, Card },
  setup() {
    const carouselSlides = ["bg-1", "bg-2", "bg-3"];

    const products = [
  { id: 1, name: "Smartphone XYZ", price: 1999.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 2, name: "Notebook Ultra", price: 3599.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 3, name: "Fone de Ouvido Bluetooth", price: 299.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 4, name: "Smartwatch Fit", price: 499.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 5, name: "Câmera Profissional", price: 2599.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 6, name: "Mouse Gamer", price: 199.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 7, name: "Teclado Mecânico", price: 349.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 8, name: "Monitor 4K", price: 1899.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 9, name: "Cadeira Gamer", price: 899.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 10, name: "Tablet 10'", price: 1299.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 11, name: "Console de Videogame", price: 2999.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 12, name: "TV 55'' 4K", price: 3599.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 13, name: "Caixa de Som Bluetooth", price: 499.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 14, name: "HD Externo 2TB", price: 599.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 15, name: "Roteador Mesh", price: 799.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 16, name: "Aspirador Robô", price: 1599.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 17, name: "Fogão 4 Bocas", price: 1299.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 18, name: "Geladeira Inverter", price: 3499.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 19, name: "Micro-ondas 30L", price: 899.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 20, name: "Máquina de Lavar", price: 2599.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" },
  { id: 21, name: "Máquina de Lavar", price: 2599.99, image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg" }
];


    const logoUrl = (logo) =>{
      return new URL(`../assets/${logo}.png`, import.meta.url).href;
    };
    const getImageUrl = (name) => {
      return new URL(`../assets/${name}.jpg`, import.meta.url).href;
    };

    return { carouselSlides, getImageUrl, logoUrl, products };
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
.cards {
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* Altere o número de colunas aqui */
  gap: 20px;
  padding: 20px;
  overflow-x: auto; /* Permite rolagem horizontal */
  scroll-snap-type: x mandatory;
  white-space: nowrap;
}
@media (max-width: 1200px) {
  .cards {
    grid-template-columns: repeat(4, 1fr); /* 4 por linha em telas médias */
  }
}

@media (max-width: 900px) {
  .cards {
    grid-template-columns: repeat(3, 1fr); /* 3 por linha em tablets */
  }
}

@media (max-width: 600px) {
  .cards {
    grid-template-columns: repeat(2, 1fr); /* 2 por linha em celulares */
  }
}
</style>
