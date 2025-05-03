<template>
	<div class="view-container-loguin">
		<Loguin />
	</div>
</template>
  
<script>
import Carousel from "../components/Carousel.vue";
import Slide from "../components/Slide.vue";
import Header from "../components/Header.vue";
import Card from "@/components/Card.vue";
import SubHeader from "@/components/SubHeader.vue";
import Loguin from "@/components/Loguin.vue";

export default {
	name: "LoguinView",
	components: { Header, Carousel, Slide, Card, SubHeader, Loguin },
	setup() {

	},
};
</script>
  
<style lang="scss" scoped>

.view-container-loguin{
	// display: flex;
	// justify-content: center;
	// align-items: center;
	// height: 100vh;
	// background-color: rgb(255, 255, 255);
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
  