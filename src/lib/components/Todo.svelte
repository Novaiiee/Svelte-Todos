<script lang="ts">
  export let todo: Todo;

  $: completed = todo.completed;
  $: console.log(completed);
</script>

<div class="wrapper">
  <div class="topbar">
    <input type="checkbox" bind:checked={todo.completed} />
    <h1 class:strike={completed} class:no-strike={completed}>
      {todo.name}
    </h1>
  </div>
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: lightslategray;
    color: white;
    width: 100%;

    h1 {
      margin-left: 20px;
      .strike {
        text-decoration: line-through;
      }

      .no-strike {
        text-decoration: none;
      }
    }

    .topbar {
      display: flex;
      align-items: center;
    }
  }
</style>
