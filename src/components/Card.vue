<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="card">
    <img :src="product.image" :alt="product.name" class="card-image" />
    <h3 class="card-title">{{ product.name }}</h3>
    <p class="card-price">R$ {{ product.price }}</p>
    <!-- <button @click="$emit('add-to-cart', product)" class="card-button">Adicionar ao Carrinho</button> -->
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  height: 100%;
  background: rgb(255, 255, 255);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  width: 220px;
  transition: transform 0.2s ease-in-out;
}
.card:hover {
  transform: scale(1.03);
  cursor: pointer;
}
.card-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
}
.card-title {
  font-size: 18px;
  margin: 10px 0;
  font-weight: bold;
  color: #333;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  max-width: 100%;
  max-height: 60px; /* Ajuste conforme necessário */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limita a quantidade de linhas */
  -webkit-box-orient: vertical;
}

.card-price {
  font-size: 16px;
  color:rgb(42 159 52);
  font-weight: bold;
}
.card-button {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
}
.card-button:hover {
  background-color: #000000;
  color: white;
}
</style>
