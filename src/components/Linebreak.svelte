<script>
    import { stores } from '@sapper/app';
    const { page } = stores();
    let param;
    param = $page.path.slice(1);
</script>
<style>
  .linebreak {
    width: 100%;
    height: 1px;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .about {
    background:#7dcdd4;
  }

  .team {
    background: #f1f6ff;
  }

  .fees {
    background:#4d0402;
  }

  .testimonials {
    background:#499e8d;
  }

  .contact {
    background:#061f33;
  }

  .community {
    background: #2c1303;
  }
  .mindfulness {
    background: #b86b3c;
  }
</style>

<div class="linebreak {param}"></div>