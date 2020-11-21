<script>
  export let url;
  export let alt;
</script>
<style>
  .image {
    text-align: center;

  }

  img {
    width: 300px;
    margin: 1.5rem auto;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    border-radius: 5px;
  }

</style>

<div class="image">
  <img src="{url}" alt="{alt}">
</div>
