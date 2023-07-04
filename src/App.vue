<script setup lang="ts">
import Editor from "./components/Editor.vue";
</script>

<template>
  <div class="dark:bg-zinc-900 bg-white min-h-screen">
    <div class="p-4">
      <h1
        class="logo text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-300 to-blue-800"
      >
        WYSIWYG
      </h1>
      <p class="dark:text-zinc-400 text-center">
        WYSIWYG Editor with Vue 3, TypeScript, Tailwind CSS, and Tiptap
      </p>
    </div>
    <div class="p-2">
      <Editor />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 2em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
