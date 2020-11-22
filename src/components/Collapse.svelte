<script>
  import { slide, fly, fade } from "svelte/transition";
  import { createEventDispatcher } from 'svelte';
  import { media } from "../components/query-store";
  export let seperate;
	$:mobile = $media.small;
  const dispatch = createEventDispatcher();
  function safariWorkaround(node) {
    if(navigator.appVersion.includes('Safari')) {
      node.style.overflow = 'hidden';
    }
  }

  let visible = false;
  export let buttonCaptionOpen;
  export let buttonCaptionClosed;
  let toggleVisbile = () => {
    visible = !visible;
     dispatch('findY');
  }
</script>
<style>
  div {
    font-size: 18px;
    line-height: 1.7rem;
  }

  button {
    margin: 1.5em auto 1.5em auto;
    width: 90%;
    display: block;
    color: white;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.2rem;
    background: #278386;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
    font: inherit;
    outline: none;
    border: none;
  }

  .desktop {
    float: right;
    margin-top: 1.5rem;
    margin-right: auto;
    width: fit-content;
  }

  button:focus {
    box-shadow: 0px 0px 8px rgba(76, 94, 175, 0.425);
    outline: none;
  }

  button:hover,
  button:active {
    background: #195153;
    box-shadow: 0px 0px 8px rgba(76, 94, 175, 0.425);
  }

  .seperate {
    width: 100%;
    height: 3rem;
  }

  .filler {
    min-height: 1px;
    height: fit-content;
  }
</style>

<div>
  <div>
    <slot></slot>
  </div>
  <div class="filler">
      {#if visible}
    <div use:safariWorkaround transition:slide={{y: -800, duration: 800}}>
      <slot name="collapseContent"></slot>
    </div>
      {/if}
  </div>

  <button transition:slide class:desktop={!mobile} on:click={toggleVisbile}>{visible ? buttonCaptionOpen : buttonCaptionClosed}</button>
</div>
{#if seperate}
<div class='seperate'></div>
{/if}
