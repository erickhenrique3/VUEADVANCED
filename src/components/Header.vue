<template>
    <div
      class="carousel-container"
      @mouseenter="stopCarousel"
      @mouseleave="startCarousel"
    >
      <div class="carousel">
        <img
          :src="images[currentIndex]"
          alt="carousel image"
          class="carousel-image"
        />
        
        <!-- Setas de navegação -->
        <button class="carousel-nav prev" @click.stop="prevImage">←</button>
        <button class="carousel-nav next" @click.stop="nextImage">→</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  // Definir as imagens do carrossel
  const images = ref([
    'https://media.istockphoto.com/id/1089844082/pt/foto/close-up-of-sporty-woman-tying-shoelace-while-kneeling-outdoor-in-background-bridge-fitness.jpg?s=612x612&w=0&k=20&c=tF8CSX7pYBB8Ec7sTeMXK3IoQq3iMnbzgLnuwLiC8uo=',
    'https://lifesportaj.com/cdn/shop/products/Sf252537e9e744d91af6cfb3c32d5e279q_800x.jpg?v=1689429188',
    'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/evolaioe/catalog/produtos/feminino/1000/1000ptoa-1.jpeg',
  ]);
  
  // Índice da imagem atual
  const currentIndex = ref(0);
  
  // Variável para armazenar o intervalo do carrossel
  let interval;
  
  // Função para iniciar o carrossel
  const startCarousel = () => {
    if (!interval) {
      interval = setInterval(() => {
        nextImage();
      }, 3000); // Troca de imagem a cada 3 segundos
    }
  };
  
  // Função para parar o carrossel
  const stopCarousel = () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  };
  
  // Função para mostrar a próxima imagem
  const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  };
  
  // Função para mostrar a imagem anterior
  const prevImage = () => {
    currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
  };
  
  // Iniciar o carrossel ao montar o componente
  onMounted(() => {
    startCarousel();
    console.log(currentIndex);
    
  });
  
  // Limpar o intervalo ao destruir o componente
  onBeforeUnmount(() => {
    stopCarousel();
  });
  </script>
  
  <style scoped>
  .carousel-container {
    position: fixed; /* Fixa o carrossel no topo da página */
    top: 0;
    left: 0;
    width: 100%; /* Ocupa toda a largura da tela */
    height: 300px; /* Altura fixa para o carrossel */
    overflow: hidden; /* Garante que o conteúdo fora da área visível seja ocultado */
    z-index: 1000; /* Garante que o carrossel fique acima de outros elementos */
    border-radius: 10px;
  }
  
  .carousel {
    display: flex;
    position: relative; /* Para que as setas sejam posicionadas corretamente */
    transition: transform 1s ease;
  }
  
  .carousel-image {
    width: 100%; 
    height: 100%;
    object-fit: cover;
    margin: 40px; 
  }
  
  .carousel-nav {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 2rem;
    z-index: 10;
  }
  
  .prev {
    left: 10px;
  }
  
  .next {
    right: 10px;
  }
  
  .carousel-container:hover .carousel {
    cursor: pointer;
  }
  </style>
  