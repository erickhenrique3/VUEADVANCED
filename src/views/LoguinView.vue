<template>
	<div class="view-container-loguin">
		<div class="returnToBack">
			<router-link to="/">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
					<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168A8,8,0,0,1,176,128Z">
					</path>
				</svg>
			</router-link>
		</div>
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

.returnToBack{
	position: absolute;
	top: 10px;
	left: 10px;
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
  