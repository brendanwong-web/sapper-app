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
		padding-left: 15rem;
		padding-right: 15rem;
		padding-bottom: 3rem;
		margin-bottom: 3rem;
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-auto-rows: max(320, fit-content);
		grid-gap: clamp(50px, 10vw, 100px);
		grid-template-areas: 
		"video text"
		"video text"
		;
		font-size: 20px;
	}

	.text {
		grid-area: text;
		line-height: 1.5rem;
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

	ul li {
		margin: 20px 0;
	}

	span h2 {
		font-size: 1.5rem;
		font-weight: 700;
		margin-top: 1.5rem;
	}

	.body p:first-child {
		margin-top: 0;
	}

	iframe {
		border: 0;
		border-radius: 7px;
	}

	.vid-wrapper {
		margin: 60px 0;
	}

	.vid-wrapper {
		position: relative;
	}

	.vids {
		grid-area: video;
	}


	.vid-wrapper p {
		text-align: center;
		margin-top: 15px;
		color: rgb(51, 51, 51);
		font-weight: 600;
	}

	.vid-wrapper:before {
		content: '';
		position: absolute;
		width: 100vw;
		height: 200px;
		border-top-left-radius: 7px;
		border-top-right-radius: 7px;
		bottom: -1rem;
		left: -1.5em;
		background-color: rgb(213, 176, 248);
		z-index: -99;
	}

	@media screen and (min-width: 768px) {
			.vid-wrapper:before {
			content: unset;
		}

			.vid-wrapper {
			margin: 0 0 30px 0;
			position: relative;
		}

	.vid-wrapper p {
		text-align: left;
		margin-top: 15px;
		color: rgb(51, 51, 51);
		font-weight: 600;
	}
	}

	.mobile-div {
		width: calc(100% + 34px);
		margin-left: -1.5em;
		height: fit-content;
		background-color: rgb(203, 191, 255);	
		border-bottom: 5px solid white;
		padding: 10px;
		font-size: 18px;
	}
	@media screen and (min-width: 768px) {
		.mobile-div {
			width: 100%;
			margin-left: 0;
			height: fit-content;
			background-color: rgb(203, 191, 255);	
			border-bottom: 5px solid white;
			padding: 10px;
			font-size: 18px;
		}

		.mobile-div p:first-child {
			margin-top: 0;
		}
	}

	.mobile-div p:last-child {
		margin-bottom: 0;
	}

	.header	{
		background-color: hsl(251, 100%, 70%);
		font-weight: 700;
		color: white;
	}

	a.link {
		color: hsl(227, 52%, 12%);
		font-weight: 700;
	}

	.footer {
		background-color: rgb(255, 246, 169);
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
		<h2>Mindfulness@Learning Hearts</h2>
			<Linebreak />
		<p>The programme at Learning Hearts Therapy is the by-product of her genuine 
			passion and in-depth experience in the areas of foundational reading and 
			numeracy development.</p>
	</span></Page>

{#if mobile}
	<div class="body">
		<p>
			Stress is an inescapable part of modern-day life.  We all spend a good proportion of our time (often sub-consciously) caught in the past or worrying about the future.  These habits of mind can overwhelm, rob of us restful sleep, keep us on edge and cause us to make rash decisions – fueling further stress. 
		</p>
		<p>
			Robust research has shown MBCT (Oxford Mindfulness Center) to be an effective, drug-free programme (combining Mindfulness with Cognitive-based Therapy) that is intended to address much of the above.  MBCT is an in-depth course that helps participants cultivate new skills and learn strategies and techniques for relating to stressors, engendering lasting and sustainable change and benefits such as:
		</p>
		<ul>
			<li>Decreased impulsivity and reactivity</li>
			<li>Greater clarity of mind and insight</li>
			<li>Wiser response and decision making</li>
			<li>Increased sense of calm and well-being</li>
			<li>Improved relationship with self and others</li>
		</ul>
		<div class="vid-wrapper">

			<iframe width="320" height="200" 
			src="https://youtube.com/embed/8GVwnxkWmSM">
			</iframe>
			<p>Creator of MBCT, Prof Mark Williams, Oxford University, shares about research on MBCT</p>
		</div>
		<div class="vid-wrapper">

			<iframe width="320" height="200" 
			src="https://youtube.com/embed/DfRRvtnOEeg">
		</iframe>
		<p>This video features participants who have attended an MBCT course, sharing their experiences.</p>
		</div>
		<h2>Programme details</h2>
		<div class="mobile-div header">
			Who
		</div>
		<div class="mobile-div">
			<p>Adults and Youth (16 years and above)</p>
			<p>
				(N.B. pre-course interview and registration process will be undertaken to better understand
				your needs and to determine if this course will be beneficial for you)
			</p>
		</div>
		<div class="mobile-div header">
			Duration
		</div>
		<div class="mobile-div">
			<p>8 sessions (2-hours each) and 1 half-day retreat (10am – 4pm)</p>
		</div>
		<div class="mobile-div header">
			Dates
		</div>
		<div class="mobile-div">
			<p>May 26th, 29th </p>
			<p>
			June 5th, 8th, 12th, 15th, 19th (Retreat), 22nd, 26th
			</p>
		</div>
		<div class="mobile-div header">
			Venue
		</div>
		<div class="mobile-div">
			<p>One-North Residences, TBC</p>
		</div>
		<div class="mobile-div header">
			Fees
		</div>
		<div class="mobile-div">
			<p>$600<br> (paid in full only upon enrollment)</p>
		</div>
		<div class="mobile-div footer">
			<p>
			If you are interested to register, kindly <a href="contact" class="link">contact us</a>.
		</p>
		</div>
		
    </div>
{:else}
	<div class="container">
		<div class="vids">

			<div class="vid-wrapper">
	
				<iframe width="400" height="275" 
				src="https://youtube.com/embed/8GVwnxkWmSM">
				</iframe>
				<p>Creator of MBCT, Prof Mark Williams, Oxford University, shares about research on MBCT</p>
			</div>
			<div class="vid-wrapper">
	
				<iframe width="400" height="275" 
				src="https://youtube.com/embed/DfRRvtnOEeg">
			</iframe>
			<p>This video features participants who have attended an MBCT course, sharing their experiences.</p>
			</div>
		</div>
		<div class="text">

		
		<p>
			Stress is an inescapable part of modern-day life.  We all spend a good proportion of our time (often sub-consciously) caught in the past or worrying about the future.  These habits of mind can overwhelm, rob of us restful sleep, keep us on edge and cause us to make rash decisions – fueling further stress. 
		</p>
		<p>
			Robust research has shown MBCT (Oxford Mindfulness Center) to be an effective, drug-free programme (combining Mindfulness with Cognitive-based Therapy) that is intended to address much of the above.  MBCT is an in-depth course that helps participants cultivate new skills and learn strategies and techniques for relating to stressors, engendering lasting and sustainable change and benefits such as:
		</p>
		<ul>
			<li>Decreased impulsivity and reactivity</li>
			<li>Greater clarity of mind and insight</li>
			<li>Wiser response and decision making</li>
			<li>Increased sense of calm and well-being</li>
			<li>Improved relationship with self and others</li>
		</ul>
		
		
		<br><br>
		<h2>Programme details</h2>
		<div class="mobile-div header">
			Who
		</div>
		<div class="mobile-div">
			<p>Adults and Youth (16 years and above)</p>
			<p>
				(N.B. pre-course interview and registration process will be undertaken to better understand
				your needs and to determine if this course will be beneficial for you)
			</p>
		</div>
		<div class="mobile-div header">
			Duration
		</div>
		<div class="mobile-div">
			<p>8 sessions (2-hours each) and 1 half-day retreat (10am – 4pm)</p>
		</div>
		<div class="mobile-div header">
			Dates
		</div>
		<div class="mobile-div">
			<p>May 26th, 29th </p>
			<p>
			June 5th, 8th, 12th, 15th, 19th (Retreat), 22nd, 26th
			</p>
		</div>
		<div class="mobile-div header">
			Venue
		</div>
		<div class="mobile-div">
			<p>One-North Residences, TBC</p>
		</div>
		<div class="mobile-div header">
			Fees
		</div>
		<div class="mobile-div">
			<p>$600<br> (paid in full only upon enrollment)</p>
		</div>
		<div class="mobile-div footer">
			<p>
			If you are interested to register, kindly <a href="contact" class="link">contact us</a>.
		</p>
		</div>
		</div>
	</div>
{/if}
	




