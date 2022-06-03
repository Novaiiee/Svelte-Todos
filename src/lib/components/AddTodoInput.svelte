<script lang="ts">
  import { todosStore } from "../stores/todos";

  let value = "";

  const onSubmit = () => {
    todosStore.actions.addTodo(value);
    value = "";
  };
</script>

<form on:submit|preventDefault={onSubmit}>
  <input bind:value />
</form>

<style lang="scss">
  input {
    padding: 20px;
    font-size: 1.2rem;
    border: 0.5px solid gray;
    border-radius: 10px;

    &:focus {
      outline-color: gray;
    }
  }
</style>
