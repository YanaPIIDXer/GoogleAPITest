<script setup lang="ts">
import { routePaths } from "./routes";

defineExpose({
  routePaths,
})
</script>

<template lang="pug">
.rootView
  h1 Google API 実験
  .list 
    ul
      li
        router-link(:to="routePaths.forms") Google Forms
</template>

<style lang="sass" scoped>
</style>
