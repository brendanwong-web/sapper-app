<script>
	import * as animateScroll from "svelte-scrollto";
	import { media } from "../components/query-store";
	$:mobile = $media.small;
	import Page from '../components/Page.svelte';
	import Linebreak from '../components/Linebreak.svelte';
	import Image from '../components/Image.svelte';
	import Collapse from '../components/Collapse.svelte';
	import { cubicIn } from "svelte/easing";

	let y;	
	function scrollSnap() {
		animateScroll.scrollToTop({offset: y});
	}

</script>
<style>
	.body {
    padding: 1.5em 1.5em;
  }

	.container {
		padding-left: 10rem;
		padding-right: 10rem;
		padding-bottom: 3rem;
		margin-bottom: 3rem;
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: repeat(2, auto);
		grid-gap: 3rem;
	}

	span p:first-child {
		margin-top: 0;
		padding-top: 0;
	}
	
	span p {
		margin-top: 1em;
		margin-bottom: 1em;
		padding-top: 0;
    font-size: 1rem;
    line-height: 1.3em;
	}

	span h2 {
		font-size: 1.5rem;
		font-weight: 700;
		margin-top: 1.5rem;
	}
</style>
<svelte:head>
	<title>About</title>
</svelte:head>

<svelte:window bind:scrollY={y} />

<Page>
	<span slot="verticalText">
		<h1>Workshops</h1>
	</span>
	<span slot="writeup">
		<h2>Upcoming workshops</h2>
		<p>Watch this space to find out about upcoming workshops run by our highly-trained team of specialists.</p>
			<Linebreak />

	</span></Page>

	




