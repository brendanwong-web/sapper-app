<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>

	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

	* {
		overflow-x: hidden;
		box-sizing: border-box;
	}

	main {
		z-index: 0;
		position: relative;
		background-color: #ffffff;
		padding-top: 60px;
		padding-left: 0;
		padding-right: 0;
		padding-bottom: 0;
		margin: 0 0;
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
		font-size: 20px;
		line-height: 1.3em;
	}

	@media only screen and (min-width: 760px) {
		main {
			position: relative;
			max-width: 100%;
			background-color: #fcfbf4;
			padding-top: 60px;
			padding-left: 0;
			padding-right: 0;
			padding-bottom: 0;
			margin: 0;
			box-sizing: border-box;
			font-family: 'Montserrat', sans-serif;
			font-size: 16px;
			line-height: 1.3em;
		}
	}

</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer />