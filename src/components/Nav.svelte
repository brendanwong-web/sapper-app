<script>
	import MediaQuery from './MediaQuery.svelte';
	import { slide, fly } from "svelte/transition";
	export let segment;
	let showMobile = false;
	function closeMobile() {
		showMobile = false;
	}
	
</script>

<style>
	* {
		box-sizing: border-box;
	}
	nav {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 2;
		font-weight: 300;
		padding: 1em 1em;
		display: flex;
		align-items: center;
		height: 60px;
		background-color: #ffffff;
	}

	.mobileNav {
		justify-content: space-between;
		z-index: 1;
	}


	.logo img {
		margin-top: 9px;
		max-height: 30px;
	}

	.hamburger{
		padding-top: 9px;
		display: grid;
		place-items: center;
/* 		flex-direction: column;
		justify-content: center;
		align-items: center; */
		position: relative;
  	z-index: 3;
		margin-right: 1rem;
		width: 40px;
		height: 50px;
	}

	.active.line::before  {
		transform: rotate(45deg) translate(44px, -48px);
		background-color: #0f3f46;
		z-index: 3;
	}

	.active.line {
		transform: translate(-60px, 0);
		background-color: #0f3f46;
;
	}

	.active.line::after {
		transform: rotate(-45deg) translate(33px, 56px);
		background-color:#0f3f46;
	}

	.line {
		display: block;
		width: 36px;
		height: 4px;
		margin-bottom: 8px;
		position: relative;
		background: #84cece;
		border-radius: 3px;
		z-index: 3;
		transform-origin: 4px 0px;
		transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
								background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
								opacity 0.55s ease;
	}
	.line::before,
	.line::after {
		content: '';
		display: block;
		width: 36px;
		height: 4px;
		position: absolute;
		background: #84cece;
		border-radius: 3px;
		z-index: 99;
		transform-origin: 4px 0px;
		transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
								background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
								opacity 0.55s ease;
	}
	.line::before {
		transform: translate(0, -10px);
	}


	.line::after {
		transform: translate(0, 10px);
	}

	.mobileUl {
		font-size: 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.mobileDrawer {
		padding: 70px 1.5rem 50px 1.5rem;
		position: fixed;
		left: 0;
		top: 0px;
		z-index: 2;
		background-color: #c8f3f3;
	}

	ul {
		flex: 1;
		margin: 0;
		padding: 0;
		flex-wrap: nowrap;
		white-space: nowrap;
	}
	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}
	li {
		display: inline-block;
		font-weight: 500;
		width: 100%;
		color: #101831;

	}
	a {
		text-decoration: none;
		padding: 0.7em 0.5em 0em 0.5em;
		margin-bottom: 0.5em;
		display: block;
	}

	@media only screen and (min-width: 760px) {
		* {
			box-sizing: border-box;
		}
		nav {
			overflow-x: hidden;
			overflow-y: hidden;
			justify-content: space-between;
			position: fixed;
			top: 0;
			z-index: 99;
			width: 100%;
			background-color: #fcfbf4;
		}

		.logo {
			margin-right: auto;
			flex: 3;
		}

		ul {
			flex: 1;
			margin-right: 0rem;
		}

		ul li {
			font-size: 1.2rem;
			font-weight: 500;
			width: auto;
			margin-right: 0.5rem;
		}

		.active {
			border-bottom: 2px solid #7fcacf;
		}
	}
</style>

<MediaQuery query="(max-width: 768px)" let:matches>
	{#if matches}
	<nav class="mobileNav">
		<div on:click={() => {showMobile = !showMobile}} class="hamburger">
			<div class="line {showMobile? 'active' : ''}"></div>
		</div>
		<div class="logo">
			<img src="drawing.png" alt="logo failed">
		</div>
		{#if showMobile}
		<div transition:fly={{x: -200}} class="mobileDrawer">
			<ul transition:fly={{x: -200}} class="mobileUl">
				<li on:click={closeMobile}><a href=".">Home</a></li>
				<li on:click={closeMobile}><a href="about">About</a></li>
				<li on:click={closeMobile}><a href="team">Team</a></li>
				<li on:click={closeMobile}><a href="testimonials">Testimonials</a></li>
				<li on:click={closeMobile}><a href="fees">Slots and Fees</a></li>
				<li on:click={closeMobile}><a href="contact">Contact</a></li>
			</ul>
		</div>
		{/if}
	</nav>
	{/if}
</MediaQuery>
<MediaQuery query="(min-width: 769px)" let:matches>
	{#if matches}
	<nav>
		<div class="logo">
			<a href=".">
				<img src="drawing.png" alt="logo failed">
			</a>

		</div>
		<ul>
			<li><a href="about" class:active={segment === 'about'}>About</a></li>
			<li><a href="team" class:active={segment === 'team'}>Team</a></li>
			<li><a href="testimonials" class:active={segment === 'testimonials'}>Testimonials</a></li>
			<li><a href="fees" class:active={segment === 'fees'}>Slots and Fees</a></li>
			<li><a href="contact" class:active={segment === 'contact'}>Contact</a></li>
		</ul>
	</nav>
	{/if}
</MediaQuery>
