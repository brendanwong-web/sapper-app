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
    height: 100%;
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
    width: 80%;
    scroll-snap-align: center;
    scroll-snap-stop: normal;
    overflow-wrap: break-word;
    word-wrap: break-word;
    border-radius: 2px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }

  .card-body {
    padding: 2rem 2rem 0rem 2rem;
    color: #1d2e2a;
    height: fit-content;
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
        <h3>Aized</h3>
        <h1>”</h1>
      </div>
      <Collapse on:findY={scrollSnap} buttonCaptionClosed={'Read more' } buttonCaptionOpen={'Read less'}>
        <span>      <p>
          The name Learning Hearts is apt as the people who make this learning centre 
          happen, operate from their hearts. 
          
          I first met Julene, who my son affectionately calls Aunty Ju, in early 2018. 
          She was recommended by my son's educational psychologist. I am grateful that 
          she put me in contact with Julene. From the first phone call, I knew that she had my child's
          interest at heart...
          
        </p></span>
        <span slot="collapseContent">
          <p>We started with Julene for learning therapy at first. My son was identified with profound
            dyslexia and he has a lot of anxiety, especially separation anxiety. My son then moved on to 
            be guided by Ellen, and together they put my son at ease. So much so that he looks forward 
            to learning therapy weekly!
            
            Fast forward, and my son has improved by leaps and bounds. We will always be in touch
            with Julene and Ellen, even after Dean graduates from Learning Hearts,
            as Julene and Ellen are now our confidants. 
            
            Thank you!
            Love Aized & Dean</p>
        </span>
      </Collapse>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <h3>Audrey</h3>
        <h1>”</h1>
      </div>
      <Collapse on:findY={scrollSnap} buttonCaptionClosed={'Read more' } buttonCaptionOpen={'Read less'}>
        <span>
          <p>
          Our son came under the tutelage of Julene when he was 13, who was recommended by both our educational psychologist and occupational therapist. Julene imparted effective study skills and strategies that helped him become an effective and enthusiastic student.
        </p></span>
        <span slot="collapseContent">
          <p>As his academic results improved, his self confidence also increased. This now translates into a recurring systematic approach to learning new skills and subjects, long after he had left Learning Hearts Therapy. Julene is more than an educational therapist; she is a friend to students and parents alike. She is empathetic, kind, approachable, fun-loving and yet remains driven to ensure her students grow up to be independent and effective learners, and more importantly, to find joy in life Long learning! Thank you Julene!</p>
        </span>
      </Collapse>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <h3>Jason B.</h3>
        <h1>”</h1>
      </div>
      <Collapse on:findY={scrollSnap} buttonCaptionClosed={'Read more' } buttonCaptionOpen={'Read less'}>
        <span>
          <p>
            Two of our children had learning disabilities and could not keep 
            pace with their peers in school. They needed specialized help. We did not 
            know how to help them, but Julene did. In her care, our daughter regained her 
            confidence her reading, spelling and mathematics. 
          </p></span>
        <span slot="collapseContent">
          <p>Our son who was delayed in 
            his speech was finally able to learn his alphabet too! We are very 
            grateful for Julene's expertise and kindness that has so profoundly impacted 
            the lives of our children and brought joy in our family.</p>
        </span>
      </Collapse>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <h3>Angelina</h3>
        <h1>”</h1>
      </div>
      <Collapse on:findY={scrollSnap} buttonCaptionClosed={'Read more' } buttonCaptionOpen={'Read less'}>
        <span>
          <p>
            I met Julene the month before my oldest daughter started mainstream primary school. My daughter was one of those singled out to attend English reading lessons prior to the start of school. She wasn't able to read fluently then and I knew this would be an issue. I then engaged Julene to teach both my oldest and younger daughters on a private basis. And from then till now, she has grown to be more than a friend - sometimes confidant, sometimes adviser, most times therapist. 
          </p></span>
        <span slot="collapseContent">
          <p>
            Ju had a knack of knowing what the girls needed. When it was time to call in the educational psychologist despite extensive therapy, she helped facilitate the process. She was with us during the most difficult times, through the diagnostic process, even in assuring me that all will be well even with both girls being diagnosed with learning disabilities. Whenever each of them needed extra help or attention, Ju would not hesitate to highlight this to me and would give them the extra help they needed. Especially in their final years leading up to their national exams, the girls would both fight to get a slot with Ju. Who does that? But it's kudos to the love and acceptance that Ju has instilled in the girls. They have such confidence in themselves that no one would know that they have any learning disability. 
          </p>
          <p>
            I'm just grateful to God for putting Ju in our path. She's not just their therapist, she's become their friend and confidante. Truly hard to find a gem like her, and though not the ultimate goal, both girls did extremely well in their Ns and O's - A1 for English and Lit (almost unheard of for a dyslexic child!), single-digit aggregate as well as direct Poly admission.  
          </p>
        </span>
      </Collapse>
    </div>
  </div>
</div>