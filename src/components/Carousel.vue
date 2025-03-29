<template>
  <div class="carousel" @mouseover="showNav = true" @mouseleave="showNav = false">
    <slot :currentSlide="currentSlide" />

    <!-- Navegação -->
    <div v-if="navEnabled" class="navigate">
      <!-- <div class="toggle-page left" :class="{ 'visible': showNav }">
        <i @click="prevSlide" class="fas fa-chevron-left">⭠</i>
      </div> -->
      <!-- <div class="toggle-page right" :class="{ 'visible': showNav }">
        <i @click="nextSlide" class="fas fa-chevron-right">⭢</i>
      </div> -->
    </div>

    <!-- Paginação -->
    <div v-if="pagintationEnabled" class="pagination">
      <span
        @click="goToSlide(index)"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
      ></span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  props: ["startAutoPlay", "timeout", "navigation", "pagination"],
  setup(props) {
    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    const showNav = ref(false);
    const autoPlayEnabled = ref(props.startAutoPlay ?? true);
    const timeoutDuration = ref(props.timeout ?? 5000);
    const pagintationEnabled = ref(props.pagination ?? true);
    const navEnabled = ref(props.navigation ?? true);

    const nextSlide = () => {
      currentSlide.value = currentSlide.value === getSlideCount.value ? 1 : currentSlide.value + 1;
    };

    const prevSlide = () => {
      currentSlide.value = currentSlide.value === 1 ? 1 : currentSlide.value - 1;
    };

    const goToSlide = (index) => {
      currentSlide.value = index + 1;
    };

    const autoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    };

    if (autoPlayEnabled.value) {
      autoPlay();
    }

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;
    });

    return {
      currentSlide,
      nextSlide,
      prevSlide,
      getSlideCount,
      goToSlide,
      pagintationEnabled,
      navEnabled,
      showNav,
    };
  },
};
</script>

<style lang="scss">
.carousel {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Contêiner das setas */
.navigate {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 2;
}

.toggle-page {
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.toggle-page i {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  font-size: 20px;
  transition: transform 0.3s ease;
}

/* Animação de entrada das setas */
.toggle-page.left {
  transform: translateX(-30px);
}

.toggle-page.right {
  transform: translateX(30px);
}

/* Quando o mouse estiver no slide, as setas aparecem e deslizam */
.toggle-page.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Paginação */
.pagination {
  position: absolute;
  bottom: 24px;
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
}

.pagination span {
  cursor: pointer;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  transition: background-color 0.3s ease;
}

.pagination .active {
  background-color: #000;
}
</style>
