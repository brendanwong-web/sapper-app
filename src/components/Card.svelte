<style>
  .enquirycard {
    flex: 1;
    background: #fab5a9;
    color: rgb(24, 24, 24);
    margin: 1rem 2rem 0rem 2rem;
    padding: 0 0;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    text-align: left;
  }


  .enquirycard h1 {
    text-align: center;
    color: white;
    background:  #530606;
    padding: 1rem 1.5rem;
    font-weight: 700;
    font-size: 2.5rem;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    margin-bottom: 0;
  }

  .card-body {
    padding: 0rem 1rem 0.5rem 1rem;
  }

  @media only screen and (min-width: 760px) {
    .enquirycard {
      text-align: center;
    }

    .card-body {
    padding: 0rem 1rem 1rem 1rem;
  }
  }
</style>
<script>

</script>
<div class="enquirycard">
  <h1>
      <slot></slot>
  </h1>
  <div class="card-body">
    <slot name="card-body"></slot>
  </div>
</div>