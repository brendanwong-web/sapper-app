<script>
	import * as animateScroll from "svelte-scrollto";
	import { media } from "../components/query-store";
	$:mobile = $media.small;
  import Page from '../components/Page.svelte';
	import Linebreak from '../components/Linebreak.svelte';
	import Collapse from "../components/Collapse.svelte";
  import Scroller from "../components/Scroller.svelte";

	let y;	
	function scrollSnap() {
		animateScroll.scrollToTop({offset: y});
	}
</script>
<svelte:head>
  <title>Testimonials</title>
</svelte:head>
<style>
	  .mobile {
    padding: 1rem 2rem;
  }

	.desktop  {
		padding-left: 10rem;
		padding-right: 10em;
  }
  
  .video {
    position: relative;
    overflow: hidden;
    width: 90%;
    padding-top: 60%;
    border-radius: 9px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

  .vidcont {
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .embed-responsive {
    border-radius: 9px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  .videocaption h4 {
    font-size: 1.5rem;
    margin-left: 1.7rem;
    margin-right: 1.7rem;
    font-weight: 500;
    color: #0b4236;
    margin: 2rem auto 1rem auto;
  }

  .videocaption p {
    text-align: justify;
    color: #0b4236;
  }

  @media only screen and (min-width: 760px) {
    .desktop {
      margin-bottom: 8rem;
    }

    .vidcont {
      margin: 3rem auto 3rem auto;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      text-align: center;
    }

    .video {
      flex: 1;
      position:relative;
      padding-bottom:34%;
      padding-top:30px;
      height:0;
      overflow:hidden;
    }

    .embed-responsive {
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
    }

    .videocaption {
      flex: 1;
      margin: 0 2rem;
    }

    .videocaption h4 {
      font-size: 1.5rem;
      margin-left: 1rem;
      margin-right: 1rem;
      font-weight: 500;
      color: #0b4236;
      margin: 2rem auto 1rem auto;
    }

    .videocaption p {
      text-align: justify;
      color: #0b4236;
    }
  }

</style>
<svelte:window bind:scrollY={y} />
<Page>
	<span slot="verticalText">
		<h2>Successes</h2>
	</span>
	<span slot="writeup">
		<h2>Testimonials From Parents</h2>
		<p>Learning Hearts Therapy was started over 20 years ago. Since then, countless children have been through
      an educational programme run by us. Over the years, we have helped many children find their confidence again.</p>
      <Linebreak />
			<p>But don't just take our word for it, hear from the many parents and children whose lives have been touched by the Learning Hearts Programme.</p>
	</span>
</Page>
{#if mobile}
<Scroller />
<div class="mobile">
  <div class="vidcont">
    <div class="video">
      <iframe title="video" class="embed-responsive" src="https://www.youtube.com/embed/nV8QOmvAhCA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="videocaption">
      <h4>All Children Can Learn</h4>
      <p>
        However, some children simply require a different system of learning, or a different style of teaching. This video showcases a student of Learning Hearts Therapy before and after our reading programme. The child came to us barely able to read and with severe gaps
        in his english education. Watch the video above to see how much his confidence and ability to read and comprehend increased after 20 sessions in our Programme.
      <p>
    </div>
  </div>
</div>
{:else}
<div class="desktop">
  <Scroller />
  <div class="vidcont">
    <div class="video">
      <iframe title="video" class="embed-responsive" src="https://www.youtube.com/embed/nV8QOmvAhCA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="videocaption">
      <h4>All Children Can Learn</h4>
      <p>
        However, some children simply require a different system of learning, or a different style of teaching. This video showcases a student of Learning Hearts Therapy before and after our reading programme. The child came to us barely able to read and with severe gaps
        in his english education. Watch the video above to see how much his confidence and ability to read and comprehend increased after 20 sessions in our Programme.
      <p>
    </div>
  </div>
</div>
{/if}