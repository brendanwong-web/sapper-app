<style>
  @import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');

    .scrolling-wrapper {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    scroll-snap-type: inline mandatory;
    margin-top: 0rem;
    padding-top: 2.5rem;
    padding-bottom: 3rem;
    scroll-padding: 0rem;
    -webkit-overflow-scrolling: touch;
    width: 100%;
  }

  .scrolling-wrapper::before {
    content: '';
    border-left: 1rem solid transparent;
  }

  .scrolling-wrapper::after {
    content: '';
    border-right: 1rem solid transparent;
  }

  .scrolling-wrapper .card {
    margin-right: 0.7rem;
    margin-left: 0.7rem;
    display: inline-block;
    flex: 0 0 auto;
    border: 1px solid transparent;
    background: #afe9dc;
    width: 90%;
    scroll-snap-align: center;
    scroll-snap-stop: normal;
    overflow-wrap: break-word;
    word-wrap: break-word;
    border-radius: 2px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }

  .card-body {
    padding: 1rem 1rem 0rem 1rem;
    color: #1d2e2a;
    height: fit-content;
  }

  @media all and (min-width:576px) {
    .card-body {
    padding: 2rem 2rem 0rem 2rem;
  }

  }
  
  

  .card-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    height: 1.5rem;
  }

  .card-title h1 {
    font-size: 2.8rem;
    font-family: 'Secular One', sans-serif;
  }

  .card-title h3 {
    font-size: 2rem;
  }

  .card-body p {
    margin: 0 0 18px 0;
  }

</style>
<script>
  import * as animateScroll from "svelte-scrollto";
  import Collapse from '../components/Collapse.svelte';
  let y;	
  $:console.log(y);
	function scrollSnap() {
		animateScroll.scrollToTop({offset: y});
  }

</script>
<svelte:window bind:scrollY={y} />
<div class="scrolling-wrapper">
  
  <div class="card">
    <div class="card-body">
      <div class='card-title'>
        <h3>Claire</h3>
        <h1>”</h1>
      </div>
      <Collapse on:findY={scrollSnap} buttonCaptionClosed={'Read more' } buttonCaptionOpen={'Read less'}>
        <span>      <p>
          Attending the MBCT after the MBSR has increased my awareness of the application of
          mindfulness. They really are complementary programmes that have helped me understand the
          stress/anxiety triggers and the cognitive therapy techniques that help my personal management.
          I wish that I had come to mindfulness practice earlier in my life rather than having had disasters
          trigger the urgency.
          </p></span>
        <span slot="collapseContent">
          <p>
            I really liked and appreciated all the practices. The pacing was fine and the Content is just so
applicable it really speaks to me. Julene’s facilitation abilities to draw on participants’
concerns/feedback/input/contributions brings even more resonance to the content covered in
light of the individual struggles we all are facing. To me this is the highlight and where I seem to
get repeated ‘ah-ha’ sentiments that bring a smile amidst some synaptic synergy.
</p>
<p>

  Very grateful to be on this journey and realise that it will be a long time before I’m at a place
  I’m comfortable but that’s ok. This is a journey.
</p>
        </span>
      </Collapse>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <div class='card-title'>
        <h3>Claudia</h3>
        <h1>”</h1>
      </div>
      <Collapse on:findY={scrollSnap} buttonCaptionClosed={'Read more' } buttonCaptionOpen={'Read less'}>
        <span>      <p>
          The Mindfulness course has given me a practical tool for managing my anxiety when facing current challenges with my teenagers. I learnt to hold the space before reacting to their behavior or before negative thoughts in my mind spirals out of control. I would recommend this course to anyone who wants to experience a refreshing insight to how the connection between the body and mind can be self-healing when we mindfully live our life.
        </p></span>
        <span slot="collapseContent">
          <p>Special thanks to our coach for her well thought-out plan for in-door and out-door experiences for the entire course which has greatly enriched my Mindfulness journey. </p>
        </span>
      </Collapse>
    </div>
  </div>
</div>
