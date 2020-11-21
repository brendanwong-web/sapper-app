<script>
	import Carousel from '@beyonk/svelte-carousel';
	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';
	import { media } from "../components/query-store";
	$:mobile = $media.small;

</script>
<style>
	* {
		box-sizing: border-box;
	}
	.container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	.logo {
		width: fit-content;
		flex: 1;
		padding: 1.5rem;
		display: grid;
		place-items: center;
	}

	.logo img{
		min-width: 300px;
		max-width: 100%;
		height: auto;
	}

	.carousel {
		margin-bottom: 2rem;
	}

	.text {
		flex: 1;
		background-color: #ace5ed;
		color: rgba(0, 18, 34, 0.8);
		padding: 2rem 2rem;
	}

	.text h1 {
		font-size: 2.5rem;
		font-weight: 800;
		line-height: 1.3em;
	}

	.text p {
		font-size: 1.5rem;
		font-weight: 400;
		line-height: 1.3em;
	}

	.slide-content {
		width: 100%;
		max-height: 500px;
		position: relative;
	}

	.slide-content img {
		width: 100%;
		max-height: 500px;
	}

	.slide-content .carousel-text {
		width: 70%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		color: white;
	}
	.carousel-text h1 {
		font-weight: 700;
	}

	.control {
		color: white;
	}

	@media only screen and (min-width: 760px) {

		.logo {
		width: fit-content;
		flex: 2;
		padding: 1.5rem;
		display: grid;
		place-items: center;
	}

	.logo img{
		min-width: 300px;
		max-width: 100%;
		height: auto;
	}

	.text {
		text-align: right;
		flex: 3;
		background-color: #ace5ed;
		color: rgba(0, 18, 34, 0.8);
		padding: 2rem 2rem 1rem 4rem;
		clip-path: polygon(0 0, 100% 0%, 100% 100%, 7% 100%);
		-webkit-box-shadow: inset -10px 25px 79px -83px rgba(0,0,0,1);
    -moz-box-shadow: inset -10px 25px 79px -83px rgba(0,0,0,1);
    box-shadow: inset -10px 25px 79px -83px rgba(0,0,0,1);
	}

	.text h1 {
		font-size: 4vw;
		font-weight: 800;
		line-height: 1.3em;
	}

	.text p {
		font-size: 2vw;
		font-weight: 400;
		line-height: 1.3em;
	}

	.carousel {
		padding: 2rem 1rem 1rem 1rem;
	}

	.slide-content {
		width: 100%;
		max-height: 500px;
		position: relative;
		padding: 0 1rem;
		margin-bottom: 2rem;
	}

	.slide-content img {
		border-radius: 3px;
		width: 100%;
		max-height: 500px;
		box-shadow: rgba(0, 0, 0, 0.418) 0px 2px 4px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	}

	.slide-content .carousel-text {
		width: 70%;
		height: 100%;
		position: absolute;
		top: 65%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		color: white;
	}
	.carousel-text h1 {
		font-size: 3vw;
		font-weight: 700;
	}

	.carousel-text p {
		line-height: 1.3em;
		font-size: 1.5vw;
	}

	.control {
		display: none;
	}
	}
</style>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="container">
	<div class="logo">
		<img src="logo_new.png" alt="logo">
	</div>
	<div class="text">
		<h1>Over 20 years of experience in educational therapy</h1>
		<p>Teaching children the way they learn, not expecting them to learn the way we teach.</p>
	</div>
</div>
<div class="container carousel">
	<Carousel perPage={{ 800: 3}} dots={mobile} loop={false}>
		<span class="control" slot="left-control">
			<ChevronLeftIcon />
		</span>
		<div class="slide-content">
			<img src="slide1.png" alt="slide">
			<div class="carousel-text">
				<h1>Our Aim</h1>
				<p>
					is to get to know each child as an individual and to provide for his/her total 
					development academically, socially and emotionally.
				</p>
			</div>
		</div>
		<div class="slide-content">
			<img src="slide2.png" alt="slide">
			<div class="carousel-text">
				<h1>Our Passion</h1>
				<p>
					goes beyond simply teaching a child to read or count, rather to instill a thirst for learning, and equip them not just for the next exam, but for life!
				</p>
			</div>
		</div>
		<div class="slide-content">
			<img src="slide3.png" alt="slide">
			<div class="carousel-text">
			<h1>Our Mission</h1>
				<p>
					is to empower parents to be their children's prime education supporters and instruments in building a genuine love for learning.
				</p>
			</div>
		</div>
		<span class="control" slot="right-control">
			<ChevronRightIcon />
		</span>
	</Carousel>
</div>
