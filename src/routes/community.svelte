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

	.container {
		width: 100vw;
		margin: 3rem 0;
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

	.mobile {
		display: none;
	}

	.grid-container {
		display: grid;
		width: 90%;
		height: auto;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		grid-gap: 10px;
		margin: 20px;
	}
		.grid-container img {
		width: 100%;
		box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    border-radius: 5px;
	}

	.text {
		font-size: 1rem;
		line-height: 1.3rem;
		padding-left: 20px;
		padding-right: 20px;
	}

	.text h2 {
		font-size: 1.5rem;
		font-weight: 700;
		text-align: center;
		margin: 1.5rem 2rem;
		color: #f85615;
	}

	ul {
		list-style: none;
		text-align: center;
		padding: 0 1rem;
	}

	ul li {
		margin: 8px 0;
	}


	.contact {
		margin: 0 20px 0;
		border-radius: 8px;
		padding: 20px 20px;
		font-size: 1.2rem;
		text-align: center;
		background-color: #db693b;
		margin-bottom: 2rem;
		color: #4e2509;
		font-weight: 600;
		line-height: 1.5rem;
	}


	p span {
		color: white;
	}

	.contact1 span{
		display: block;
		margin-bottom: 1rem;
		font-size: 1.2rem;
		font-weight: 700;
	}

	@media only screen and (min-width: 600px) {
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 70%;
		margin: 2rem auto;
	}	

	.grid-container {
		top: 0;
		left: 10vw;
		width: 50%;
		max-width: 450px;
		height: auto;
		grid-template-columns: 1fr 1fr;
	}

	.container:nth-of-type(3) .grid-container {
		grid-template-columns: 1fr 1fr;
	}

		.grid-container img {
		width: 100%;
		box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    border-radius: 5px;
	}



	.text {
		margin-left: 5rem;
		margin-top: 2rem;
		font-size: 1.1rem;
		line-height: 1.5rem;
		width: 50%;
	}

	.text h2 {
		font-weight: 700;
	}

	.contact {
		width: 50%;
		margin: 2rem auto;
	}



	}


</style>
<svelte:head>
	<title>Community outreach</title>
</svelte:head>

<svelte:window bind:scrollY={y} />

<Page>
	<span slot="verticalText">
		<h1>Community Outreach</h1>
	</span>
	<span slot="writeup">
			<h2>Community Outreach Programme</h2>
			<p>As part of the SMOTA Reading Angels programme, our reading programme is being brought to vulnerable children from disadvantaged families in the Bukit Batok neighbourhood.</p>
			<Linebreak />
			<a href="https://www.worldbank.org/en/news/immersive-story/2019/11/06/a-learning-target-for-a-learning-revolution">Ending Learning Poverty</a>
	</span>
</Page>
	
	<div class="container">
		<div class="grid-container">
			<img id="a1" src='c1.jpg' alt='mum' />
			<img id="a2" src='a2.jpg' class:mobile='{mobile}' alt='mum' />
		</div>
		<div class="text">
			<h2>Research-backed</h2>
			<ul>
				<li>International best-practice approach</li>
				<li>Explicit phonological training.</li>
				<li>Structured, cummulative, and multisensory.</li>
			</ul>
		</div>
	</div>
	<div class="container">
		<div class="grid-container">
			<img id="b1" class:mobile='{mobile}' src='b1.jpeg' alt='mum' />
			<img id="b2" src='b2.jpg' alt='mum' />
		</div>
		<div class="text">
			<h2>Arts and Crafts</h2>
			<ul>
				<li>pedogogically sound art and craft projects,</li>
			</ul>
		</div>
	</div>
	<div class="container">
		<div class="grid-container">
			<img id="d3" class:mobile='{mobile}' src='d3.jpeg' alt='mum' />
			<img id="c2" src='c2.png' alt='mum' />
		</div>
		<div class="text">
			<h2>Games</h2>
		</div>
	</div>
	<div class="container">
		<div class="grid-container">
			<img id="d1" class:mobile='{mobile}' src='d1.jpeg' alt='mum' />
			<img id="d2" src='d2.jpeg' alt='mum' />
		</div>
		<div class="text">
			<h2>Concrete and meaningful activities</h2>
		</div>
	</div>

		<div class="contact contact1">
			<p>
				<span>Venue</span> SMOTA class room / home-based
			</p>
			<p>
				<span>Timing</span>
				1.5hr per session. Block of 10 sessions.
			</p>
			<p>
				<span>Cost</span>
				Materials provided & One time registration fee $50
			</p>
			<p>
				To register, please fill in and return form
			</p>
		</div>
		<div class="contact">
			<p>
				If your’e interested to <span>volunteer</span> with Reading Angels, 
				or know any <span>family or child</span> who may
				 benefit from this programme, kindly <a href="contact">contact us</a>
			</p>
		</div>



	




