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
		<h1>Mindfulness</h1>
	</span>
	<span slot="writeup">
		<h2>Mindfulness programs</h2>
		<p>Julene founded Learning Hearts Therapy almost 20 years ago
			out of her home 'Montessori'. Then, an 
			endearing little boy with ASD came to her for help, igniting a special 
			calling in teaching - and the rest is history.</p>
			<Linebreak />
		<p>The programme at Learning Hearts Therapy is the by-product of her genuine 
			passion and in-depth experience in the areas of foundational reading and 
			numeracy development.</p>
	</span></Page>

{#if mobile}
	<div class="body">
	
    </div>
{:else}
	<div class="container">
        
	</div>
{/if}
	




