<script>
  export let image;
</script>
<style>
  
  .container {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
  }

  .left{
    width: 100%;
    text-align: left;
  }

  .right {
    font-size: 18px;
    line-height: 1.7rem;
    padding-top: 1rem;

  }
@media only screen and (min-width: 760px) {
  .container {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 4rem;
  }

  .left{
    margin-right: 3rem;
    flex: 1 1 500px;
    text-align: left;
    padding: 2rem 3rem 1rem 20rem;
    border-bottom-right-radius: 7px;
    border-top-right-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    height: fit-content;
    width: 120%;
    background: #7F7FD5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .right {
    font-size: 18px;
    line-height: 1.7rem;
    padding-top: 1rem;
    flex: 2 1 auto;

  }
}
  

  img {
    max-width: 400px;
    height: auto;
    margin-bottom: 1.5em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
  }

  h4 {
    font-size: 21px;
    font-weight: 600;
  }

</style>

<div class="container">
  <div class="right">
    <slot></slot>
  </div>
  <div class="left">
    <img src="{image}" alt="member">
    <h3>
      <slot name="name"></slot>
    </h3>
    <h4>
      <slot name="title"></slot>
    </h4>
  </div>
</div>
