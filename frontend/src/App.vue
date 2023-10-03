<script setup>
import {ref} from 'vue';
import App from "./App.vue";

const name = ref(App);
</script>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html {
  font-size: 14px;
}
.form-group {
  .error {
    line-height: 1;
    display: none;
    margin-top: 5px;
  }
}
.field-error {
  .error {
    display: block;
    color: #ff0000;
  }
}
</style>
