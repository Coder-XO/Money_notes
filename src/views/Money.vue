<template>
  <div class="Nav-wrapper">
    <div class="content">
      <p>Money</p>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">

export default {
  name: 'money'
};
</script>

<style scoped lang="scss">
  .Nav-wrapper{
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .content{
    overflow: auto;
    flex-grow: 1;
  }
</style>