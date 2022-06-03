<script lang="ts">
  import { todosStore } from "../stores/todos";
  import AddTodoInput from "./AddTodoInput.svelte";
  import Todo from "./Todo.svelte";
</script>

<section>
  <h1>All Todos</h1>
  <AddTodoInput />

  <ul>
    {#each $todosStore as todo (todo.id)}
      <Todo bind:todo />
    {/each}
  </ul>
</section>

<style lang="scss">
  section {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ul {
      width: 100%;
      // &:nth-child() {
      //   margin-bottom: 5px;
      // }
    }
  }
</style>
