<script>
  import { stores } from '@sapper/app';
  import { onMount } from 'svelte';
  import { media } from "../components/query-store";
  import { animate } from "../animate.js";
	$:mobile = $media.small;
  const { page } = stores();
  let param;
  param = $page.path.slice(1);

</script>
<style>
    .container {
      width: 100%;
      margin: 0 0;
    }

    .top-writeup {
      text-align: left;
      padding: 1rem 2rem 1rem 2rem;
      height: fit-content;
    }


    .linebreak {
      width: 100%;
      border-radius: 7px;
      height: 2px;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .about {
      color: rgb(52, 83, 87);
      background: #bbedf3;
    }

    .fees {
      color: #582521;
      background: #fab5a9;
    }

    .team {
      color:#3f495c;
      background: #a9c3f3;
    }

    .testimonials {
      color: #1a302b;
      background: #8bf1db;
    }

    .contact {
      color: #1a3246;
      background:#6bafe7;
    }

    .community {
      color: #4e2509;
      background:#db693b;
    }
    .mindfulness {
      color: hsl(0, 0%, 100%);
      background: hsl(19, 58%, 67%);
      position: relative;
      overflow: hidden;
    }
  @media only screen and (min-width: 760px) {
    .container {
      display: flex;
      margin: 3rem auto 1rem auto;
    }
    .vertical-text {
      padding: 1rem 3rem 1rem 3rem;
      margin-left: 4rem;
      font-size: 2.5rem;
      font-weight: 700; 
      text-align: right;
      text-shadow: -3px 3px 1px rgba(0,0,0,0.2);
      height: 15rem;
    }

    .top-writeup {
      width: 150%;
      text-align: left;
      padding: 1rem 3rem 1rem 3rem;
      border-bottom-left-radius: 7px;
      border-top-left-radius: 7px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      height: fit-content;
    }
  }


</style>

<div class="container">
  {#if !mobile}
    <div class="vertical-text"
      use:animate={{type: 'from', 'clipPath': 'inset(0 0 100% 0)', duration: 2}}
    >
      <slot name="verticalText">
      </slot>
    </div>
  {/if}
  <div class="top-writeup {param}"
    use:animate={
    !mobile ? {type: 'from', duration: 1, x: 200} :
    {type: 'from', duration: 1, y: -200}
}
  >
    <slot name="writeup">
    </slot>
  </div>
</div>