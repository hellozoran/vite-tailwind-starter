<script setup>
import { inject } from 'vue'
const $api = inject('$api')
</script>

<template>
  <h1 class="text-slate-800 font-light text-2xl text-center mt-12">Welcome</h1>
  <h2 class="text-center mt-2 text-slate-600">This is a home page served by Vue Router.</h2>
</template>