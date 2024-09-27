<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(8);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>任刘洋月薪：{{ count }}K</p>
    <button type="button" @click="count++">点击加薪</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
