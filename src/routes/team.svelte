<script>
	import * as animateScroll from "svelte-scrollto";
	import { media } from "../components/query-store";
	$:mobile = $media.small;
  import Page from '../components/Page.svelte';
	import Linebreak from '../components/Linebreak.svelte';
	import Member from "../components/Member.svelte";
	import Collapse from "../components/Collapse.svelte";

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
		padding-top: 1.5em;
		padding-left: 0rem;
		padding-right: 10em;
	}

	.blockquote {
		font-size: 22px;
		font-style: italic;
		padding: 0 3rem;
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
</style>
<svelte:head>
	<title>Our team</title>
</svelte:head>
<svelte:window bind:scrollY={y} />
<Page>
	<span slot="verticalText">
		<h1>Our Team</h1>
	</span>
	<span slot="writeup">
		<h2>Education Tailored To Your Child</h2>
		<p>Our teachers are hand-picked not just for their qualifications, but more 
			importantly for their innate ability to inspire,
			and passion for imparting a love for learning in their students, versus simply scoring 
			in exams.</p>
      <Linebreak />
			<p>We feel it is important to view your child's learning as a partnership 
				between parents and teacher. We keep parents abreast of progress through 
				timely updates, and practice an open-door policy in the 
				Centre.</p>
	</span>
</Page>
{#if mobile}
<div class="body">
	<Member image={'mum.jpg'}>
		<span slot="name">Julene Tan</span>
		<span slot="title">Principal therapist</span>
		<span>For over 10 years, Julene was the in-house reading specialist consultant at CHIJ Kellock where she taught P1 and P2 students and trained the 
			teachers. Prior to these engagements, Julene was a part-time reading therapist with an established dyslexia remediation centre in Camden Medical Centre.
		</span>
	</Member>
	<Collapse on:findY={scrollSnap} buttonCaptionClosed={'Read more' } buttonCaptionOpen={'Read less'}>
		<span slot="collapseContent">
			<ul>
				<li>Bachelor's degree from the National University of Singapore (Majoring in Linguistics/Geography)</li>
				<li>Masters in Counselling from Monash University </li>
				<li>Masters in Education (Special Education) from Flinders University, Adelaide</li>
				<li>Diploma(distinction) in Early Childhood Education from the Montessori Centre International London</li>
				<li>Post-graduate specialist diploma in Specific Learning Difficulties (Dyslexia) from the renowned Hornsby International Dyslexia Centre in London</li>
				<li>British Psychological Society, Certified Test User</li>
				<li>Certified teacher for the Mymind programme, trained at Centrum Voor Mindfuless, Amsterdam</li>
				<li>Oxford Mindfulness Centre Mindfulness-based cognitive Therapy teacher trained</li>
			</ul>
		</span>
	</Collapse>
	<Member image={'ellen.jpg'}>
		<span slot="name">Ellen Ong</span>
		<span slot="title">Therapist</span>
		<span>Ellen started as an in-house legal counsel in Jakarta, Indonesia before moving to Singapore where she practised mainly as a compliance officer in various banks, stock broking firms and fund management companies. 
		</span>
	</Member>
	<Collapse on:findY={scrollSnap} buttonCaptionClosed={'Read more' } buttonCaptionOpen={'Read less'}>
		<span slot="collapseContent">
			<p>Ellen met Julene at a workshop empowering parents to teach children reading and wanted to learn more about teaching her own child.  Julene invited Ellen to observe her teaching at CHIJ Kellock and shortly after that, Ellen decided to give up her career and enter education.</p>
			<p>Ellen spent the first year observing julene, shadowing her teaching.  In 2010 when the reading hearts programme was taken up by Shu Qun primary for all P1 and P2 pupils, Ellen joined the team to deliver it. Following that, Ellen took a sabbatical to have and take care of her second child and rejoined Julene in 2014 just before they started teaching the programme at Queenstown primary school. In 2015, they both decided to concentrate their energies on the children struggling with reading disabilities, stopping the school-based programme to focus entirely on educational therapy work. Ellen has been teaching with Julene ever since.</p>
			<p class="blockquote">"There is so much fulfillment in helping children with learning difficulties read fluently and spell accurately. It is a satisfying accomplishment when a child overcomes his or her learning difficulty and is more confident in reading and spelling and especially in themselves."</p>
			<p>Ellen has found deep purpose in contributing to the well being of the children she teaches, and continues to invest in professional training and development to better help and support them.</p>
		</span>
	</Collapse>
</div>
{:else}
<div class="container">
	<Member image={'mum.jpg'}>
		<span slot="name">Julene Tan</span>
		<span slot="title">Principal therapist</span>
		<span>
			<p>
				For over 10 years, Julene was the in-house reading specialist consultant at CHIJ Kellock where she taught P1 and P2 students and trained the 
				teachers. Prior to these engagements, Julene was a part-time reading therapist with an established dyslexia remediation centre in Camden Medical Centre.
			</p>
			<ul>
				<li>Bachelor's degree from the National University of Singapore (Majoring in Linguistics/Geography)</li>
				<li>Masters in Counselling from Monash University </li>
				<li>Masters in Education (Special Education) from Flinders University, Adelaide</li>
				<li>Diploma(distinction) in Early Childhood Education from the Montessori Centre International London</li>
				<li>Post-graduate specialist diploma in Specific Learning Difficulties (Dyslexia) from the renowned Hornsby International Dyslexia Centre in London</li>
				<li>British Psychological Society, Certified Test User</li>
				<li>Certified teacher for the Mymind programme, trained at Centrum Voor Mindfuless, Amsterdam</li>
				<li>Oxford Mindfulness Centre Mindfulness-based cognitive Therapy teacher trained</li>
			</ul>
		</span>
	</Member>
	<Member image={'ellen.jpg'}>
		<span slot="name">Ellen Ong</span>
		<span slot="title">Therapist</span>
		<span>
			<p>Ellen started as an in-house legal counsel in Jakarta, Indonesia before moving to Singapore where she practised mainly as a compliance officer in various banks, stock broking firms and fund management companies. </p>
			<p>Ellen met Julene at a workshop empowering parents to teach children reading and wanted to learn more about teaching her own child.  Julene invited Ellen to observe her teaching at CHIJ Kellock and shortly after that, Ellen decided to give up her career and enter education.</p>
			<p>Ellen spent the first year observing julene, shadowing her teaching.  In 2010 when the reading hearts programme was taken up by Shu Qun primary for all P1 and P2 pupils, Ellen joined the team to deliver it. Following that, Ellen took a sabbatical to have and take care of her second child and rejoined Julene in 2014 just before they started teaching the programme at Queenstown primary school. In 2015, they both decided to concentrate their energies on the children struggling with reading disabilities, stopping the school-based programme to focus entirely on educational therapy work. Ellen has been teaching with Julene ever since.</p>
			<p class="blockquote">"There is so much fulfillment in helping children with learning difficulties read fluently and spell accurately. It is a satisfying accomplishment when a child overcomes his or her learning difficulty and is more confident in reading and spelling and especially in themselves."</p>
			<p>Ellen has found deep purpose in contributing to the well being of the children she teaches, and continues to invest in professional training and development to better help and support them.</p>
		</span>
	</Member>
</div>
{/if}