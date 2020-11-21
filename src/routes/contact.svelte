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
    padding: 0em 2em 2em 2em;
  }

	span p:first-child {
		margin-top: 0;
		padding-top: 0;
	}
	
	span p {
		margin-top: 1em;
		margin-bottom: 1em;
		padding-top: 0;
	}

	span h2 {
		font-size: 1.5rem;
		font-weight: 700;
		margin-top: 1.5rem;
  }
  
  .item svg {
    margin-right: 1.5rem;
    fill: #1b70c0;
  }

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1.5rem 0;
  }

  .item img {
    width: 280px;
    height: auto;
    margin-left: 1rem;
    margin-top: 0.5rem;
  }

  .item h4 {
    font-size: 1.4rem;
    color: #707070;
    font-weight: 500;
  }

  .body iframe {

    width: 100%;
    height: 350px;
  }

  @media only screen and (min-width: 760px) {
    .body {
      display: flex;
      padding: 0 8rem 4rem 8rem;
    }

    .body .right {
      flex: 1;
      margin: 2rem 2rem;
    }

    .assetcont {
      flex: 1;
      margin: 0 2rem;
    }
  }


</style>
<svelte:head>
	<title>About</title>
</svelte:head>

<svelte:window bind:scrollY={y} />

<Page>
	<span slot="verticalText">
		<h1>Contact</h1>
	</span>
	<span slot="writeup">
		<h2>Get In Touch With Us</h2>
		<p>Have questions about our learning programme? Ready to begin this journey with us?</p>
			<Linebreak />
      <p>Message or email us to book your consultation session. We look forward to meeting you and beginning this journey together.
      </p>
	</span></Page>

	<div class="body">
    <div class="assetcont">
      <div class="item">
        <img src="clickme.png" width="200px" alt="click me!">
      </div>
      <div class="item">
        <a href="https://api.whatsapp.com/send?phone=+6590585574" target="_blank">
          <svg width="50px" height="50px" viewBox="0 0 16 16" class="bi bi-chat-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
            <path fill-rule="evenodd" d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </a>
          <h4>9058 5574</h4>
      </div>
      <div class="item">
        <a href="mailto:askus@learning-hearts.com" class="mailtoui">
          <svg width="50px" height="50px" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
          </svg>
        </a>
        <h4>askus@learning-hearts.com</h4>
      </div>
      <div class="d-flex flex-row my-3 my-lg-2 align-items-center item">
        <a href="https://g.page/learning-hearts?share" target="_blank">
          <svg width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 74"><path d="M27.5 6C39.4 6 49 14.4 49 28.5c0 2.8-0.8 6-2.2 9.5 -5.6 14.3-19.7 32-19.7 32S14.3 53.3 8.6 39.3C7 35.4 6 31.6 6 28.5 6 14.4 15.6 6 27.5 6M27.5 2c-7 0-13.4 2.5-18 7.1C4.6 14 2 20.7 2 28.5c0 3.4 1 7.5 2.9 12.3 5.8 14.4 18.5 30.9 19 31.6 0.7 1 1.9 1.6 3.1 1.6 0 0 0 0 0 0 1.2 0 2.4-0.6 3.1-1.5 0.6-0.7 14.6-18.4 20.3-33 1.7-4.3 2.5-7.8 2.5-11 0-7.8-2.6-14.5-7.5-19.4C40.9 4.5 34.5 2 27.5 2L27.5 2z"/><path d="M28.1 18c0.7 0 1.5 0.1 2.3 0.3 4.8 1.2 7.7 6.2 6.5 11 -1 4.1-4.7 6.7-8.7 6.7 -0.7 0-1.5-0.1-2.3-0.3 -4.8-1.2-7.7-6.2-6.5-11C20.4 20.7 24.1 18 28.1 18M28.1 14C28.1 14 28.1 14 28.1 14c-5.9 0-11.1 4-12.6 9.7 -1.8 6.9 2.4 14 9.3 15.8 1.1 0.3 2.2 0.4 3.3 0.4 5.9 0 11.1-4 12.6-9.7 1.8-6.9-2.4-14-9.3-15.8C30.2 14.2 29.2 14 28.1 14L28.1 14z"/></svg>
        </a>
        <h4 class="ml-1 pt-2">
          9 One-North Residences #01-37 <br />
          S138643
        </h4>
      </div>
    </div>
    <div class="right">
      <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.788671516549!2d103.78787821475403!3d1.3017121990505898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1b478ff0e34d%3A0x48cc63bf2f3f65bf!2sLearning%20Hearts%20Therapy%20LLP!5e0!3m2!1sen!2ssg!4v1600364850680!5m2!1sen!2ssg" frameborder="1" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
	</div>
	




