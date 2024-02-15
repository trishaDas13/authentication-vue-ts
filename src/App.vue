

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>

<style>
@import '../node_modules/tailwindcss/base.css';
@import '../node_modules/tailwindcss/components.css';
@import '../node_modules/tailwindcss/utilities.css';
</style>
