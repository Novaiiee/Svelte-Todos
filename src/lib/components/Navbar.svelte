<nav>
  <div class="start"><a href="/">Svelte Todos</a></div>
  <div class="middle" />
  <div class="end">End</div>
</nav>

<style lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
    background-color: blueviolet;
    max-width: 100vw;
    padding: 20px 10rem;
    color: white;

    .start {
      flex: 1;
      
      a {
        color: white;
        text-decoration: none;
      }
    }
    .middle {
      display: flex;
      justify-content: center;
      flex: 3;
    }
    .end {
      flex: 1;
      display: flex;
      justify-content: end;
    }
  }
</style>
