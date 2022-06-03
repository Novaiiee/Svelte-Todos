<script lang="ts">
  import Navbar from "./lib/components/Navbar.svelte";
  import TodoList from "./lib/components/TodoList.svelte";
</script>

<Navbar />
<main><TodoList /></main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100%;
  }
</style>
