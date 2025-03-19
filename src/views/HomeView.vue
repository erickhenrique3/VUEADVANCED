<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import Header from '@/components/Header.vue';
import Card from '@/components/Card.vue';
import { ref } from 'vue';

const product = ref({
  name: 'Tênis de Corrida',
  price: 299.90,
  image: 'https://lifesportaj.com/cdn/shop/products/Sf252537e9e744d91af6cfb3c32d5e279q_800x.jpg?v=1689429188',
});
</script>

<template>
  <Header />
  <main>
    <Card
    :product="product"
    />
  </main>
</template>
