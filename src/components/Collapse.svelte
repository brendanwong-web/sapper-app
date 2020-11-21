<script>
  import { slide, fly } from "svelte/transition";
  import { createEventDispatcher } from 'svelte';
  import { media } from "../components/query-store";
  export let seperate;
	$:mobile = $media.small;
  const dispatch = createEventDispatcher();

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
</style>

<div>
  <div>
    <slot></slot>
  </div>
  {#if visible}
    <div transition:slide={{y: 400}}>
      <slot name="collapseContent"></slot>
    </div>
  {/if}
  <button class:desktop={!mobile} on:click={toggleVisbile}>{visible ? buttonCaptionOpen : buttonCaptionClosed}</button>
</div>
{#if seperate}
<div class='seperate'></div>
{/if}
