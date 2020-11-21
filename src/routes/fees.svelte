<script>
	import * as animateScroll from "svelte-scrollto";
	import { media } from "../components/query-store";
	import Card from '../components/Card.svelte';
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
	.mobile {
		margin-bottom: 3rem;
	}
	.body {
    padding: 1.5em 1em 0em 1em;
  }

	span p:first-child {
		margin-top: 0;
		padding-top: 0;
	}
	
	span p {
		margin-top: 1em;
		margin-bottom: 1em;
		padding-top: 0;
    font-size: 1.2rem;
    line-height: 1.3em;
	}

	span h2 {
		font-size: 1.5rem;
		font-weight: 700;
		margin-top: 1.5rem;
	}

	.card-body h3 {
		margin: 1.5em 0 0 0;
		font-weight: 700;
	}

	.card-body p {
		margin: 0.50rem 0 0.5rem 0;
	}

	.desktop { 
		display: flex;
		justify-content: space-around;
		padding: 0 8rem 5rem 8rem;
	}

	@media only screen and (min-width: 760px) {
		span p {
		margin-top: 1em;
		margin-bottom: 1em;
		padding-top: 0;
    font-size: 1.2rem;
    line-height: 1.3em;
	}

	span h2 {
		font-size: 1.5rem;
		font-weight: 700;
		margin-top: 1.5rem;
	}
		.card-body h3 {
			margin: 1em 0 0 0;
			font-size: 1.5rem;
			font-weight: 700;
		}

		.card-body p {
			font-size: 1.2rem;
			line-height: 1.3em;
			margin: 0.50rem 0 0.5rem 0;
		}

	}
</style>
<svelte:head>
	<title>Fees</title>
</svelte:head>

<svelte:window bind:scrollY={y} />

<Page>
	<span slot="verticalText">
		<h1>Fees</h1>
	</span>
	<span slot="writeup">
		<h2>Start Your Journey With Us</h2>
		<p>Our usual procedure is for the parent to first book a consultation with our principal therapist. Following that, if we determine we can be of help, a thorough assessment is conducted to help us develop a learning profile and therapy plan, customised to your child. 
		</p>
			<Linebreak />
	</span></Page>

{#if mobile}
<div class="mobile">
	<div class="body">
		<Card>
			<span>
				Therapy slots</span>
			<span slot="card-body" class="card-body">
				<h3 class="">Mon, Wed, Fri: </h3>
				<p class="">9.30 a.m - 6.30 p.m</p>
				<h3  class="">Sat:</h3>
				<p>10 a.m - 2 p.m <span>(Priority goes to Secondary level students)</span></p>
			</span>
		</Card>
	</div>
	<div class="body">
		<Card>
			<span>
				Fees</span>
			<span slot="card-body" class="card-body">
				<h3 class="">Consultation Fee:</h3>
				<p class="">$180/hr</p>
				<h3  class="">Therapy Fees:</h3>
				<p>Payable quarterly in the first month of each quarter</p>
				<h3  class="">Registration Fee:</h3>
				<p>$100, payable annually, per subject time slot</p>
				<p>One-month's fee as deposit, refundable, when T&C's are met</p>
			</span>
		</Card>
	</div>
</div>
{:else}
<div class="desktop">
	<Card>
		<span>
			Therapy slots</span>
		<span slot="card-body" class="card-body">
			<h3 class="">Mon, Wed, Fri: </h3>
			<p class="">9.30 a.m - 6.30 p.m</p>
			<h3  class="">Sat:</h3>
			<p>10 a.m - 2 p.m</p>
			<p>(Priority goes to Secondary level students</p>
		</span>
	</Card>
	<Card>
		<span>
			Fees</span>
		<span slot="card-body" class="card-body">
			<h3 class="">Consultation Fee:</h3>
			<p class="">$180/hr</p>
			<h3  class="">Therapy Fees:</h3>
			<p>Payable quarterly in the first month of each quarter</p>
			<h3  class="">Registration Fee:</h3>
			<p>$100, payable annually, per subject time slot</p>
			<p>One-month's fee as deposit, refundable, when T&C's are met</p>
		</span>
	</Card>
</div>
{/if}
	





