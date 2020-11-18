<script>
	import MediaQuery from './MediaQuery.svelte';
	import { slide } from "svelte/transition";
	export let segment;
	let showMobile = false;
	
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		display: flex;
	}

	.logo {
		flex: 2;
	}

	.hamburger{
		display: block;
		position: relative;
		top: 15px;
		right: 0;
  	z-index: 1;
		margin-right: 1rem;
	}

	.active-line:first-child  {
		height: 4px;
		width: 33px;
		transform: rotate(45deg) translate(0px, 0px);
		transform-origin: 0% 0%;
	}

	.active-line:nth-child(2) {
		height: 4px;
		width: 33px;
		transform: rotate(-45deg) translate(-2px, -15px);
		transform-origin: 100% 0%;

	}

	.active-line:last-child  {
		transform: rotate(0deg) scale(0.1, 0.1);
		opacity: 0%;
	}

	.line,
	.active-line {
		display: block;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		position: relative;
		background: #cdcdcd;
		border-radius: 3px;
		z-index: 1;
		transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
								background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
								opacity 0.55s ease;
	}

	.mobileUl {
		display: flex;
		flex-direction: column;
		padding-left: 1.5rem;
		align-items: flex-start;
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
	}
	[aria-current] {
		position: relative;
		display: inline-block;
	}
	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<MediaQuery query="(max-width: 768px)" let:matches>
	{#if matches}
	<nav>
		<div on:click={() => {showMobile = !showMobile}} class="hamburger">
			<div class="{showMobile? 'active-line' : 'line'}"></div>
			<div class="{showMobile? 'active-line' : 'line'}"></div>
			<div class="{showMobile? 'active-line' : 'line'}"></div>
		</div>
		<div class="logo">
			<p>logo</p>
		</div>
	</nav>
	{#if showMobile}
	<ul transition:slide class="mobileUl">
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">Testimonials</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">Slots and Fees</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">Contact</a></li>
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">Team</a></li>
	</ul>
{/if}
	{/if}
</MediaQuery>
<MediaQuery query="(min-width: 769px)" let:matches>
	{#if matches}
	<nav>
		<div class="logo">
			<p>logo</p>
		</div>
		<ul>
			<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
			<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About</a></li>
			<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">Testimonials</a></li>
			<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">Slots and Fees</a></li>
			<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">Contact</a></li>
			<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">Team</a></li>
		</ul>
	</nav>
	{/if}
</MediaQuery>
