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
		font-size: 1.5rem;
	}

	span h2 {
		font-size: 1.7rem;
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
		<h1>About Us</h1>
	</span>
	<span slot="writeup">
		<h2>Education Tailored To Your Child</h2>
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
			<Image url='unnamed.jpg' alt='mum' />
			<Collapse on:findY={scrollSnap} buttonCaptionClosed={'Read more' } buttonCaptionOpen={'Read less'}>
				<span>
					<h2>Years of Training and Experience</h2>
					<p>Julene finds the greatest challenge and satisfaction in helping
						children with learning difficulties. She has worked with children 
						diagnosed with mild ASD, ADHD, Dyslexia, Dyspraxia, and SLI, as well 
						as those from broken, 
					troubled and disadvantaged backgrounds.</p>
				</span>
				<span slot="collapseContent"><p>Julene believes firmly in the transfer of knowledge to all people who 
					work with and nurture children, hence the many workshops she has 
					conducted for both parents and teachers, to empower them to help children
					acquire critical reading and numeracy strategies.</p>
				</span>
			</Collapse>
			<Image url='mum2.jpg' alt='mum2' />
			<Collapse on:findY={scrollSnap} buttonCaptionClosed={'View Programme Features' } buttonCaptionOpen={'Hide Programme Features'}>
				<span>
					<h2>Teaching approach and methodology</h2>
					<p>Here at Learning Hearts Therapy, we do not utilize any pre-packaged reading programme. Instead, our approach is to teach the way children learn, rather than expect them to learn the way we teach.</p>
				</span>
				<span slot="collapseContent">
					<p>The Programme features and is aligned with what internationally recognised institutions and organisations (National Reading Panel, US; Department for Education, UK; National Council for Teachers of Mathematics) deem to be the 'best practices' in the teaching of foundational reading and numeracy skills for children. This includes the use of explicit, systematic, cumulative curricula and a multi-sensory approach, in addition to the integration of all sub-areas of learning (eg. reading, writing, spelling; mathematics in real life situations). Apart from these,
						the programme boasts of some special features:</p>
					<ul>
						<li>Personalised teaching, in a one-to-one ratio, to each child's individual challenges and needs, and takes into consideration the whole child</li>
						<li>Integrates several subject areas (eg. English and Literature/Geography) and bridges to standardised exams (PSLE, 'N/O' levels, iGCSEs</li>
						<li>Developed by an educational therapist trained in the field of Specific Learning Difficulties, with extensive experience in the field, both as teacher and teacher trainer</li>
						<li>Takes into account the unique challenges posed by Singaporean culture, language development and school curriculum</li>
						<li>Focuses on building strategies and fundamental concepts, for children from N2 to Sec 4, particularly those with mild to moderate learning difficulties</li>
						<li>Extends to secondary levels for Math, Science, English, Literature, and Geography, supported by our small but dedicated, hand-picked team</li>
					</ul>
				</span>
			</Collapse>
		</div>
{:else}
	<div class="container">
		<Collapse on:findY={scrollSnap} buttonCaptionClosed={'Read more' } buttonCaptionOpen={'Read less'}>
			<span>
				<h2>With Years of Training and Experience...</h2>
				<p>Julene finds the greatest challenge and satisfaction in helping
					children with learning difficulties. She has worked with children 
					diagnosed with mild ASD, ADHD, Dyslexia, Dyspraxia, and SLI, as well 
					as those from broken, 
				troubled and disadvantaged backgrounds.</p>
			</span>
			<span slot="collapseContent"><p>Julene believes firmly in the transfer of knowledge to all people who 
				work with and nurture children, hence the many workshops she has 
				conducted for both parents and teachers, to empower them to help children
				acquire critical reading and numeracy strategies.</p>
			</span>
		</Collapse>
		<Image url='unnamed.jpg' alt='mum' />

		
		<Collapse on:findY={scrollSnap} buttonCaptionClosed={'View Programme Features' } buttonCaptionOpen={'Hide Programme Features'}>
			<span>
				<h2>Teaching approach and methodology</h2>
				<p>Here at Learning Hearts Therapy, we do not utilize any pre-packaged reading programme. Instead, our approach is to teach the way children learn, rather than expect them to learn the way we teach.</p>
			</span>
			<span slot="collapseContent">
				<p>The Programme features and is aligned with what internationally recognised institutions and organisations (National Reading Panel, US; Department for Education, UK; National Council for Teachers of Mathematics) deem to be the 'best practices' in the teaching of foundational reading and numeracy skills for children. This includes the use of explicit, systematic, cumulative curricula and a multi-sensory approach, in addition to the integration of all sub-areas of learning (eg. reading, writing, spelling; mathematics in real life situations). Apart from these,
					the programme boasts of some special features:</p>
				<ul>
					<li>Personalised teaching, in a one-to-one ratio, to each child's individual challenges and needs, and takes into consideration the whole child</li>
					<li>Integrates several subject areas (eg. English and Literature/Geography) and bridges to standardised exams (PSLE, 'N/O' levels, iGCSEs</li>
					<li>Developed by an educational therapist trained in the field of Specific Learning Difficulties, with extensive experience in the field, both as teacher and teacher trainer</li>
					<li>Takes into account the unique challenges posed by Singaporean culture, language development and school curriculum</li>
					<li>Focuses on building strategies and fundamental concepts, for children from N2 to Sec 4, particularly those with mild to moderate learning difficulties</li>
					<li>Extends to secondary levels for Math, Science, English, Literature, and Geography, supported by our small but dedicated, hand-picked team</li>
				</ul>
			</span>
		</Collapse>
		<Image url='mum2.jpg' alt='mum2' />
	</div>
{/if}
	




