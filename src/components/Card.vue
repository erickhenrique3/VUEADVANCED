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
    <p class="card-price">R$ {{ product.price.toFixed(2) }}</p>
    <button @click="$emit('add-to-cart', product)" class="card-button">Adicionar ao Carrinho</button>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  width: 200px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  color: red;
}
.card-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.card-title {
  font-size: 18px;
  margin: 10px 0;
}
.card-price {
  font-size: 16px;
  color: #09f36b;
  font-weight: bold;
}
.card-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
.card-button:hover {
  background-color: #0056b3;
}
</style>
