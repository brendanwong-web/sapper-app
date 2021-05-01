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
		padding-left: 8rem;
		padding-right: 8rem;
		padding-bottom: 3rem;
		padding-top: 2rem;
		margin-bottom: 3rem;
		display: grid;
		grid-template-columns: 1fr 2fr 200px;
		grid-gap: 50px;
		grid-template-areas: 
		"video text image"
		"video text image"
		;
		font-size: 20px;
	}

	section {
		padding-bottom: 2rem;
	}

	.head-image {
		width: clamp(250px, 20vw, 300px);
		height: auto;
		border-radius: 7px;
		margin: 15px auto 40px;
		display: block;
	}

	.text {
		grid-area: text;
		line-height: 1.5rem;
	}

	.image {
		grid-area: image;
		margin-top: 2rem;
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

	ul {
		padding-left: 1.5em;
	}

	ul li {
		margin: 30px 0;
		padding-left: 15px;
	}

	ul li::marker {
		color:hsl(24, 100%, 74%);
		font-weight: 700;
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
		margin: 60px 0 30px;
	}

	.vid-wrapper {
		position: relative;
		overflow: hidden;
	}

	.vids {
		grid-area: video;
	}

	.brown-bg {
		background-color:hsl(37, 100%, 85%);
		margin: 0 -1.5em;
		padding: 1px 1.5em;
		border-radius: 7px;
	}


	.vid-wrapper + p {
		text-align: center;
		margin-top: 15px;
		color: rgb(91, 91, 91);
		font-weight: 600;
		position: relative;
	}

	.vid-wrapper + p:before {
		content: '';
		position: absolute;
		width: 100vw;
		height: 200px;
		border-top-left-radius: 7px;
		border-top-right-radius: 7px;
		bottom: -1rem;
		left: -1.5em;
		background-color: hsl(37, 100%, 82%);
		z-index: -99;
	}

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	}

	h3 {
		text-align: center;
		font-weight: 700;
		color: rgb(50, 29, 20);
		margin-bottom: 30px;
	}

	.mobile-break {
		display: block;
	}

	@media screen and (min-width: 768px) {
			.vid-wrapper:before {
			content: unset;
		}

			.vid-wrapper {
			margin: 0 0 30px 0;
			position: relative;
		}

			.mobile-break {
			display: none;
		}

		.vid-wrapper + p {
			text-align: left;
			margin-top: 15px;
			color: rgb(51, 51, 51);
			font-size: 0.9rem;
		}

		.vid-wrapper + p:first-of-type {
			text-align: left;
			margin-top: 15px;
			margin-bottom: 60px;
			color: rgb(51, 51, 51);
			font-weight: 600;
			font-size: 0.9rem;
		}

			.vid-wrapper + p:before {
			content: unset;
		}

		.brown-bg {
			margin: 0px 0 0 -8em;
    		padding: 2rem 2rem 2rem 8em;
		}
	}

	.mobile-div {
		height: fit-content;
		padding: 20px;
		text-align: center;
		
	}

	@media screen and (min-width: 768px) {
		.mobile-div {
			width: 100%;
			margin-left: 0;
			height: fit-content;
			background-color: hsl(24, 100%, 95%);	
			border-bottom: 5px solid white;
			padding: 10px;
			font-size: 18px;
		}

		.mobile-div p:first-child {
			margin-top: 0;
		}

		h3 {
			text-align: left;
			font-size: 2rem;
		}

		

		.details {
			display: flex;
			flex-direction: column;
		}

		.details .row {
			display: flex;
			flex-direction: column;
			margin-bottom: 50px;
			justify-content: space-between;
		}

		.details .row h1 {
			font-size: 1.8rem;
			font-weight: 700;
		}

		.details .row .content {
			background: linear-gradient(145deg, hsl(24, 100%, 85%), hsl(24, 100%, 74%));
			box-shadow:  3px 3px 8px #c3c3c3,
						-3px -3px 8px #fdfdfd;
			padding: 20px;
			border-radius: 15px;
		}

		.details .row .content p:first-child {
			margin-top: 0;
		}
		.details .row .content p:last-child {
			margin-bottom: 0;
		}
	}

	.mobile-div p:last-child {
		margin-bottom: 0;
	}

	.header	{
		background-color: hsl(24, 100%, 74%);
		font-weight: 800;
		color: rgb(255, 255, 255);
		border-radius: 18px;
		background: linear-gradient(145deg, hsl(24, 100%, 85%), hsl(24, 100%, 74%));
		box-shadow:  3px 3px 8px #c3c3c3,
					-3px -3px 8px #fdfdfd;
		padding: 10px;
					
	}

	a.link {
		color: hsl(0, 0%, 100%);
		font-weight: 800;
		text-transform: uppercase;
		text-decoration: none;
		font-size: 1.5rem;
	}

	.footer {
		background-color: hsl(24, 79%, 38%);
		color: rgb(208, 208, 208);
		padding: 20px;
		font-weight: 700;
		border-radius: 18px;
		background: linear-gradient(145deg, hsl(24, 79%, 60%),hsl(24, 79%, 50%));
		box-shadow:  3px 3px 8px #c3c3c3,
					-3px -3px 8px #fdfdfd;
		border: none;
		outline: none;
		width: 100%;
		
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
		<h2>Mindfulness<br class="mobile-break">@Learning Hearts</h2>
		<p>
			Stress is an inescapable part of modern-day life.  We all spend a good proportion of our time (often sub-consciously) caught in the past or worrying about the future.  These habits of mind can overwhelm, rob of us restful sleep, keep us on edge and cause us to make rash decisions – fueling further stress. 
		</p>
		<Linebreak />
	</span></Page>

{#if mobile}
	<div class="body">
		<section>

			<img src="mindfulness.jpg" class="head-image" alt="mindfulness">
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
		</section>
		<section>

			<div class="brown-bg">
	
				<div class="vid-wrapper" style="padding-top: 56.25%">
					
					<iframe
					src="https://youtube.com/embed/8GVwnxkWmSM">
				</iframe>
			</div>
			<p>Creator of MBCT, Prof Mark Williams, Oxford University, shares about research on MBCT</p>
			<div class="vid-wrapper" style="padding-top: 56.25%">
				
				<iframe
				src="https://youtube.com/embed/DfRRvtnOEeg">
			</iframe>
		</div>
		<p>This video features participants who have attended an MBCT course, sharing their experiences.</p>
	</div>
		</section>
		<section>

			<h3>Programme details</h3>
			<div class="mobile-div header">
				Who
			</div>
			<div class="mobile-div">
				<p>Adults and Youth</p>
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
			<div class="mobile-div">
				<p>
					For registration, kindly
				</p>
			</div>
			<button class="footer">
				<a href="contact" class="link">contact us</a>
			</button>
		</section>
		
    </div>
{:else}
	<div class="container">
		<div class="vids">
			<div class="brown-bg">
				<div class="vid-wrapper" style="padding-top: 56.25%">
					
					<iframe
						src="https://youtube.com/embed/8GVwnxkWmSM">
					</iframe>
				</div>
				<p>Creator of MBCT, Prof Mark Williams, Oxford University, shares about research on MBCT</p>
				<div class="vid-wrapper" style="padding-top: 56.25%">
				
					<iframe
						src="https://youtube.com/embed/DfRRvtnOEeg">
					</iframe>
				</div>
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
			<h3>Programme details</h3>
			
			<div class="details">
				<div class="row">
					<h1>
						Who:
					</h1>
					<div class="content">
						<p>Adults and Youth (16 years and above)</p>
						<p>
							(N.B. pre-course interview and registration process will be undertaken to better understand
							your needs and to determine if this course will be beneficial for you)
						</p>
					</div>
				</div>
				<div class="row">
					<h1>
						Duration:
					</h1>
					<div class="content">
						<p>8 sessions (2-hours each) and 1 half-day retreat (10am – 4pm)</p>
					</div>
				</div>
				<div class="row">
					<h1>
						Dates:
					</h1>
					<div class="content">
						<p>May 26th, 29th </p>
						<p>
						June 5th, 8th, 12th, 15th, 19th (Retreat), 22nd, 26th
						</p>
					</div>
				</div>
				<div class="row">
					<h1>
						Venue:
					</h1>
					<div class="content">
						<p>One-North Residences, TBC</p>
					</div>
				</div>
				<div class="row">
					<h1>
						Fees:
					</h1>
					<div class="content">
						<p>$600<br> (paid in full only upon enrollment)</p>
						<p>To register, kindly contact us by clicking on the button below</p>
					</div>
				</div>
				<button class="footer">
					<a href="contact" class="link">contact us</a>
				</button>
			</div>
		</div>
		
		<div class="image">
			<img src="mindfulness.jpg" class="head-image" alt="mindfulness">
		</div>
	</div>
{/if}
	




